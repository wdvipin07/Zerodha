import { useState, useRef } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef(null);

  // const handlSubmit = (e) => {
  //   e.preventDefault();
  //   const form = formRef.current;
  //   if (form.checkValidity() === false) {
  //     form.classList.add("was-validated");
  //     return;
  //   }
  //   // Handle form submission logic here
  //   console.log("Form submitted with:", { username, email, password });
  // };

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      return;
    }

    try {
      await axios.post("http://localhost:3000/signup", {
        username,
        email,
        password,
      });
      alert("Signup successful!");
    } catch (err) {
      alert("Signup failed: " + err.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center my-5">
          <h1 className="mt-5 text-muted">
            Open a free demat and trading account online
          </h1>
          <h4 className="my-4 text-muted">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h4>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <img src="media/images/account_open.svg" alt="" />
        </div>
        <div className="col">
          <h1 className="text-muted">Signup now</h1>
          <h6 className="text-muted">Or track your existing application</h6>

          <form
            ref={formRef}
            onSubmit={handleSubmitClick}
            className="needs-validation"
            noValidate
          >
            <div className="mb-3 mt-5">
              <label htmlFor="name" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="username"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid name.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid email.{" "}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid password.
              </div>
            </div>
            <button
              className="p-2 btn btn-primary my-4 text-center fs-5"
              style={{
                margin: "0 auto",
                width: "",
                backgroundColor: "rgb(61, 130, 220)",
              }}
              type="submit"
            >
              Sign up for free
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
