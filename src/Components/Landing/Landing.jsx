import React, { useEffect, useState } from "react";
import "./Landing.css";
import BlueMan from "../images/navbar/blue-man.png";
import GreenMan from "../images/navbar/green-man.png";
import RedMan from "../images/navbar/red-man.png";
import Logo from "../images/logo/logo-white.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const Landing = () => {
  const [user, setUser] = useState(null);
  const [username, setusername] = useState("");

  auth.onAuthStateChanged((userInfo) => {
    if (userInfo) {
      setUser(userInfo);
      setusername(userInfo.email.split("@")[0]);
    } else {
      setUser(null);
    }
  });
  useEffect(() => {}, [user]);

  const Logout = () => {
    auth.signOut();
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
        {user !== null ? (
          <div className="cta">
            <h4>Hello, {username}</h4>
            <button
              onClick={() => {
                Logout();
              }}
              className="secondary-btn"
            >
              LOG OUT
            </button>
          </div>
        ) : (
          <div className="cta">
            <Link to="/login" className="primary-btn">
              Login
            </Link>
            <a href="./" className="secondary-btn">
              Sign Up
            </a>
          </div>
        )}

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
      <section className="ty__Landing__hero">
        <img className="logo" src={Logo} alt="" />
        <hr />
        <h1>Treasure Hunt</h1>
        <h4>Get All Of The Flags And Complete The Mission</h4>
        {user !== null ? (
          <Link to="/ty">
            Get Started
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="16.5" stroke="white" />
              <path
                d="M13 16.5C12.7239 16.5 12.5 16.7239 12.5 17C12.5 17.2761 12.7239 17.5 13 17.5V16.5ZM22.3536 17.3536C22.5488 17.1583 22.5488 16.8417 22.3536 16.6464L19.1716 13.4645C18.9763 13.2692 18.6597 13.2692 18.4645 13.4645C18.2692 13.6597 18.2692 13.9763 18.4645 14.1716L21.2929 17L18.4645 19.8284C18.2692 20.0237 18.2692 20.3403 18.4645 20.5355C18.6597 20.7308 18.9763 20.7308 19.1716 20.5355L22.3536 17.3536ZM13 17.5H22V16.5H13V17.5Z"
                fill="white"
              />
            </svg>
          </Link>
        ) : (
          <Link to="/login">
            Get Started
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="16.5" stroke="white" />
              <path
                d="M13 16.5C12.7239 16.5 12.5 16.7239 12.5 17C12.5 17.2761 12.7239 17.5 13 17.5V16.5ZM22.3536 17.3536C22.5488 17.1583 22.5488 16.8417 22.3536 16.6464L19.1716 13.4645C18.9763 13.2692 18.6597 13.2692 18.4645 13.4645C18.2692 13.6597 18.2692 13.9763 18.4645 14.1716L21.2929 17L18.4645 19.8284C18.2692 20.0237 18.2692 20.3403 18.4645 20.5355C18.6597 20.7308 18.9763 20.7308 19.1716 20.5355L22.3536 17.3536ZM13 17.5H22V16.5H13V17.5Z"
                fill="white"
              />
            </svg>
          </Link>
        )}
      </section>
    </div>
  );
};

export default Landing;
