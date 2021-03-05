import React, { useState } from "react";
import "./Login.css";
import db, { auth } from "../../firebase";
import BlueMan from "../images/navbar/blue-man.png";
import GreenMan from "../images/navbar/green-man.png";
import RedMan from "../images/navbar/red-man.png";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [Error, setError] = useState(false);

  const Login = () => {
    auth
      .signInWithEmailAndPassword(email, passwd)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        var userDocRef = db.collection("users").doc(`${user.email}`);

        userDocRef.get().then((docSnapshot) => {
          if (docSnapshot.exists) {
            userDocRef
              .update({
                lastLogin: new Date(),
              })
              .then((e) => console.log(e))
              .catch((err) => console.log(err));
          } else {
            userDocRef
              .set({
                name: user.email,
                lastLogin: new Date(),
              })
              .then((e) => console.log(e))
              .catch((err) => console.log(err));
          }
        });
        setEmail("");
        setPasswd("");
        history.push("/ty");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        setError(true);
      });
  };

  return (
    <div>
      <nav className="space">
        <Link to="/">
          <div></div>
        </Link>

        <ul>
          <li>
            <a href="https://fy-story.web.app//">
              <img src={BlueMan} alt="" />
              FYIT / DS
            </a>
          </li>
          <li>
            <a href="https://sy-story.web.app/">
              <img src={GreenMan} alt="" />
              SYIT
            </a>
          </li>
          <li>
            <Link to="/" className="active">
              <img src={RedMan} alt="" />
              TYIT
            </Link>
          </li>
        </ul>
        <div className="cta">
          <Link to="/login" className="primary-btn">
            Login
          </Link>
          <a href="./" className="secondary-btn">
            Sign Up
          </a>
        </div>

        <div className="hamburger">
          <button
            onTouchStart={() => {
              const nav = document.querySelector(
                "#root > div > div > nav > div.hamburger > ul"
              );
              if (nav.style.display === "grid") {
                nav.style.display = "none";
              } else {
                nav.style.display = "grid";
              }
            }}
          ></button>
          <ul>
            <li>
              <a href="https://fy-story.web.app/">FYIT / DS</a>
            </li>
            <li>
              <a href="https://sy-story.web.app/">SYIT</a>
            </li>
            <li>
              <a href="https://ty-story.web.app/">TYIT</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="ty__login">
        <div className="ty__login__main">
          <div className="ty__login__title">
            <h1>Start The Adventure</h1>
            <p>
              You must have received your login credentials, if not then send us
              a message over whatsapp.
            </p>
          </div>
          <div className="ty__login__form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                Login();
              }}
            >
              <span className="ty__loginInputCon">
                <label htmlFor="coords">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="myid@mail.com"
                />
              </span>
              <span className="ty__loginInputCon">
                <label htmlFor="coords">Password</label>
                <input
                  value={passwd}
                  onChange={(e) => setPasswd(e.target.value)}
                  type="password"
                  placeholder="********"
                />
              </span>
              <button disabled={email === "" || passwd === ""} type="submit">
                Login
              </button>
            </form>
            {Error && (
              <h5 className="invalid xyz-in" xyz="fade up duration-10">
                Invalid Username or Password
              </h5>
            )}
            <p>
              Not Registered? <a href="">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
