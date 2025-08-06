require("dotenv").config();
// Importing required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json()); // body parsing
const cors = require("cors");
const bodyParser = require("body-parser");
const url = process.env.MONGO_URL;
const session = require("express-session"); //this is the Express session

// Importing models
const Holding = require("./model/Holding");
const Order = require("./model/Order");
const Position = require("./model/Position");
const User = require("./model/User");
// Middleware
app.use(cors());
app.use(bodyParser.json());

//authentication
const passport = require("passport");
const LocalStrategy = require("passport-local");

// database function call to connect DB
main()
  .then((res) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
//function to connect database
async function main() {
  await mongoose.connect(url);
}

//session option
const sessionOption = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

//session
app.use(session(sessionOption));
//authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Endpoint to add holdings
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await Holding.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).send("Error fetching holdings: " + err.message);
  }
});

//end point of all positions
app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await Position.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).send("Error fetching holdings: " + err.message);
  }
});
// Endpoint to add a new Order
app.post("/newOrder", async (req, res) => {
  try {
    console.log("Received order:", req.body); // Debug line
    const newOrder = new Order({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();

    // --- Holdings update logic ---
    if (req.body.mode === "BUY") {
      let holding = await Holding.findOne({ name: req.body.name });
      if (holding) {
        holding.qty += Number(req.body.qty);
        holding.price = Number(req.body.price); // Optionally update price
        await holding.save();
      } else {
        await Holding.create({
          name: req.body.name,
          qty: req.body.qty,
          price: req.body.price,
        });
      }
    }
    if (req.body.mode === "SELL") {
      let holding = await Holding.findOne({ name: req.body.name });
      if (holding) {
        holding.qty -= Number(req.body.qty);
        if (holding.qty <= 0) {
          await Holding.deleteOne({ name: req.body.name });
        } else {
          await holding.save();
        }
      }
    }
    // --- End Holdings update logic ---

    res.send("Order added successfully");
  } catch (err) {
    res.status(400).send("Error adding order: " + err.message);
  }
});

app.post("/signup", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    console.log("Registered:", registeredUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res
      .status(500)
      .json({ message: "Registration failed", error: err.message });
  }
});

//Login user
// app.post(
//   "/login",
//   passport.authenticate("local", { failureRedirect: "/login" }),
//   function (req, res) {
//     res.redirect("/");
//   }
// );

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
