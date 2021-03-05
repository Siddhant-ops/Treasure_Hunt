import React, { useEffect, useState } from "react";
import "./MainIndex.css";
import { Link, useHistory } from "react-router-dom";
import BlueMan from "../images/navbar/blue-man.png";
import GreenMan from "../images/navbar/green-man.png";
import RedMan from "../images/navbar/red-man.png";
import HeroImg from "../images/hero_3.png";
import { auth } from "../../firebase";
import { Backdrop, Fade, Modal } from "@material-ui/core";

const MainIndex = ({ userInfo }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [username, setusername] = useState("");
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    if (userInfo !== null) {
      setUser(userInfo);
      setusername(userInfo.email.split("@")[0]);
    }
  }, [userInfo]);

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
        <div className="cta">
          {user !== null ? <h4>Hello, {username}</h4> : <h4>Hello</h4>}
          <button
            onClick={() => {
              Logout();
            }}
            className="secondary-btn"
          >
            LOG OUT
          </button>
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
      <section>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalOpen}
          className="modalBackdrop"
          onClose={() => {
            setModalOpen(false);
          }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalOpen}>
            <div>
              <h1>ZGC Treasure Hunt</h1>
              <h4>
                Since, we are in Alpha testing phase of Treasure hunt
                Web-Application
              </h4>
              <h4>
                Access is only granted to Faculties of Information Technology
                Department of KES Shroff College
              </h4>
              <h4>
                If you find an error regarding the clues, stories or the
                structure of the elements
              </h4>
              <h4>Contact :</h4>
              <h5>
                <span>
                  Yash Bavishi ( ZGC Secretary ) :{" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=919819421075"
                    target="_blank"
                    rel="noreferrer"
                  >
                    9819421075
                  </a>
                </span>{" "}
                or{" "}
                <span>
                  Siddhant Dalvi ( Lead Developer ) :{" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=919702076050"
                    target="_blank"
                    rel="noreferrer"
                  >
                    9702076050
                  </a>
                </span>
              </h5>
              <h5
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                Click here to close this!
              </h5>
            </div>
          </Fade>
        </Modal>
        <div className="hero">
          <img src={HeroImg} alt="" />
        </div>
        <div className="data">
          <div>
            <span>
              <p>Story for TYIT</p>
              <hr />
            </span>
            <span className="info">
              <h1>Story of JJ Adkins</h1>
              <h4>
                In the year 2010, Humans realised the importance for their
                survival as a species. They felt the need to find a new home.
                Earth might soon become inhabitable.
              </h4>
              <Link to="/ty/story">
                Launch
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9628 11C14.9628 10.7444 14.7556 10.5372 14.5 10.5372C14.2444 10.5372 14.0372 10.7444 14.0372 11L14.9628 11ZM14.1728 19.3272C14.3535 19.5079 14.6465 19.5079 14.8272 19.3272L17.7722 16.3822C17.953 16.2015 17.953 15.9085 17.7722 15.7278C17.5915 15.547 17.2985 15.547 17.1178 15.7278L14.5 18.3456L11.8822 15.7278C11.7015 15.547 11.4085 15.547 11.2278 15.7278C11.047 15.9085 11.047 16.2015 11.2278 16.3822L14.1728 19.3272ZM14.0372 11L14.0372 19L14.9628 19L14.9628 11L14.0372 11Z"
                    fill="white"
                  />
                  <circle
                    cx="14.5"
                    cy="14.5"
                    r="14.1915"
                    stroke="white"
                    strokeWidth="0.617021"
                  />
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainIndex;
