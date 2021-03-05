import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Index/MainIndex.css";
import "./Story.css";
import BlueMan from "../images/navbar/blue-man.png";
import GreenMan from "../images/navbar/green-man.png";
import RedMan from "../images/navbar/red-man.png";
import db, { auth, storage } from "../../firebase";
import { Backdrop, Fade, Modal } from "@material-ui/core";

const Story = ({ userInfo }) => {
  const history = useHistory();
  const chapters = [];
  const [user, setUser] = useState(null);
  const [username, setusername] = useState("");
  const [chapterCount, setChapterCount] = useState(0);
  const [key, setKey] = useState("");
  const [MorseURL, setMorseURL] = useState("");
  const [PyURL, setPyURL] = useState("");
  const [threeClick, setThreeClick] = useState(false);
  const [treasure, setTreasure] = useState("");
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // USer Information and Stamping
  useEffect(() => {
    if (userInfo !== null) {
      setUser(userInfo);
      setusername(userInfo.email.split("@")[0]);

      var storyDocRef = db.collection("story").doc(`${userInfo.email}`);

      storyDocRef.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          storyDocRef.update({
            lastLogin: new Date(),
          });
        } else {
          storyDocRef
            .set({
              name: user.email,
              storyStarted: new Date(),
              chapter1Stamp: new Date(),
              chapter2Stamp: new Date(),
              chapter3Stamp: new Date(),
              chapter4Stamp: new Date(),
              chapter5Stamp: new Date(),
            })
            .then((e) => console.log(e))
            .catch((err) => console.log(err));
        }
      });
    }
  });

  const timings = (chapter) => {
    var storyDocRef = db.collection("story").doc(`${userInfo.email}`);
    storyDocRef.get().then((docSnapshot) => {
      if (docSnapshot.exists) {
        switch (chapter) {
          case 0:
            storyDocRef.update({
              chapter1Stamp: new Date(),
            });
            break;
          case 1:
            storyDocRef.update({
              chapter2Stamp: new Date(),
            });
            break;
          case 2:
            storyDocRef.update({
              chapter3Stamp: new Date(),
            });
            break;
          case 3:
            storyDocRef.update({
              chapter4Stamp: new Date(),
            });
            break;
          case 4:
            storyDocRef.update({
              chapter5Stamp: new Date(),
            });
            break;
          case 5:
            storyDocRef.update({
              chapter6Stamp: new Date(),
            });
            break;
          case 6:
            storyDocRef.update({
              chapter7Stamp: new Date(),
            });
            break;

          default:
            break;
        }
      }
    });
  };

  const Logout = () => {
    auth.signOut();
  };
  const story = `Years spent by and its the year 2200 where humanity has terraformed Mars and have already started to terraform Saturn humanity has also invented to travel through space using light speed but after all this evolution humanity has failed to eradicate poverty with 28 billion souls on 2 planets humanity was struggling with famine and inflation on 27th January of 2200, the Mar's Space Station received a message from outside of the solar system. After months of decoding and translation, the message was "HELP US" and some co-ordinates. Humans decided to conduct meeting they again took months to decide whether we should invest money or not or we should try to counter famine but the humanity was destined to explore they have been exploring since the birth of species they decided that only one person can be sent to explore and the name of that person is John Jacob Adkins aka JJ Adkins, the famous last astronaut with great pilot skills.
  It was 31st March 2202 the space ship name was "Hope 28" took off for its mission. It included Major 2 things an AI named "XYA" (Axya) and also a hibernation chamber. The missions were
  1. Explore the co-ordinates
  2. Research extensively
  3. Come back home (primary objective)
  After completing the protocols JJ decided to hibernate until the HOPE crosses the solar system and told XYA to wake him up as per that after 8 months XYA completed her task of waking JJ up and he observed a dark matter, there was no light, not even a single beam, JJ recorded the message "Currently 8 months have been passed I can not see any beam of light I am going to hibernate again until reaching close to co-ordinates" JJ told XYA that incase any abruptions arrive then wake him up.
  After another 3 months when JJ woke up he observed a Wormhole to inspect that wormhole he wore his suit and told XYA to take snapshots of the wormhole and asked XYA to confirm the co-ordinates.
  The XYA confirmed that co-ordinates were true JJ had 2 options wait for the confirmation from MSS ( Mar's Space Station ) or jump in wormhole because already enough time has been spent JJ decides to jump in wormhole bending a place where unvierse bends after time and space after jumping through wormhole JJ observes a small solar system with 2 planets and a sun after 2 weeks there was a solar storm thus a whole cluster of aestorids coming in their directions after surviving those, the ship's mecahnical performance dropped down at 35% and the remaining fuel was 30% and to check the remaining fuel JJ had to go to the Dock area which required a password, Only 1 planet can be visited and be returned home as per XYA calulation or both the planets can be visited and stay there JJ decides to goto both planets when he was near planet1 he observed that the planet was on fire there were lava errupting from every directions and the planet was 30% of its axis JJ thought whether he was too late or what happened to such a planet since the planet was not close to the sun as well. On going at second planet he observed water and land he and gravity was 0.10 times earth's gravity thus after landing on second planet he remembered his long forgetton home Earth where the valleys flown mountains rose and the mattress of sand but the Investigation and exploration wasn't completed he still had to find who sent the message.
  XYA already sent the message to the MSS when JJ checked the oxygen levels it was similar to earth he felt like he was back on earth but the radiation level were of the charts he found a bunker the bunker needed a password after XYA cracked the password he discovered an old communication device and charts he thought it would have been impossible to send messages outside that wormhole he traveled to other places and observed everywhere everything was same as earth except for living beings exccept for trees he decided to travel more and found an building when he traveled in that building he saw an message on the wall and tried to connect the network and power there was a message that humanity has been ended on this planet because of war after spending days for travelling JJ stumped across an city a city burned down to ashes JJ called the spaceship and got the bad news of low resources for survival having 2 choice 1 to hibernate or 1 to return to his home which was his primary task JJ decided to search more and more places on the planet trying to find some reesource he did found food for himself but the lonliness will consume him thus he made the goal of returning back to his homeland he found a bunker solved many tasks and found a fuel reservoir and he flew back to his home safely and also eradicated poverty because of his new found home and they name the planet hope.`;

  chapters[0] = story.substr(0, 535);
  chapters[1] = story.substr(535, 690);
  chapters[2] = story.substr(1225, 1346);
  chapters[3] = story.substr(2571, 986);
  chapters[4] = story.substr(3557, 1070);

  useEffect(() => {
    const morseFile = storage.refFromURL(
      "gs://ty-story.appspot.com/Morse Audio/morse.wav"
    );
    morseFile
      .getDownloadURL()
      .then((url) => {
        setMorseURL(url);
      })
      .catch((err) => console.log(err));

    const pyFile = storage.refFromURL(
      "gs://ty-story.appspot.com/Codes/SomeFile.py"
    );
    pyFile
      .getDownloadURL()
      .then((url) => {
        setPyURL(url);
      })
      .catch((err) => console.log(err));

    const treasure = storage.refFromURL(
      "gs://ty-story.appspot.com/Codes/DecryptPythonFile.py"
    );
    treasure
      .getDownloadURL()
      .then((url) => {
        setTreasure(url);
      })
      .catch((err) => console.log(err));
  });

  const checkKey = () => {
    if (chapterCount === 0 && key === "RA 2H 19M 5S DEC +13 25 5") {
      timings(chapterCount);
      setChapterCount(chapterCount + 1);
      setKey("");
      setError(false);
    } else if (chapterCount === 1 && threeClick) {
      timings(chapterCount);
      setChapterCount(chapterCount + 1);
      setKey("");
      setError(false);
    } else if (chapterCount === 2 && key === "poiuytrewq547896321") {
      timings(chapterCount);
      setChapterCount(chapterCount + 1);
      setKey("");
      setError(false);
    } else if (chapterCount === 3 && key === "MASTER") {
      timings(chapterCount);
      setChapterCount(chapterCount + 1);
      setKey("");
      setError(false);
      setModalOpen(true);
    }
    // else if (chapterCount === 4 && parseInt(key) === 9702076050) {
    //   setChapterCount(chapterCount + 1);
    //   setKey("");
    //   setError(false);
    // }
    else {
      setError(true);
    }
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

      <section className="section__story">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalOpen}
          className="modalBackdrop"
          onClose={() => {
            setModalOpen(false);
            history.push("/");
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
                Sorry we are currently developing this last clue and this will
                be tested directly in Beta-testing!
              </h4>
              <h5
                onClick={() => {
                  setModalOpen(false);
                  history.push("/");
                }}
              >
                Click here to close this!
              </h5>
            </div>
          </Fade>
        </Modal>
        <h1 hidden>
          {(() => {
            switch (chapterCount) {
              case 2:
                return "Encrypted key : 63 47 39 70 64 58 6c 30 63 6d 56 33 63 54 55 30 4e 7a 67 35 4e 6a 4d 79 4d 51 3d 3d ";
              case 3:
                return 'THESE ARE THE LETTERS "STRAME" SCRAMBLE THEM AND YOU WILL FIND THE KEY';
              default:
                break;
            }
          })()}
        </h1>
        <h1>Chapter {chapterCount + 1} / 5</h1>
        <div className="story">
          <h3>{chapters[chapterCount]}</h3>
        </div>

        {(() => {
          switch (chapterCount) {
            case 0:
              return (
                <div className="clue xyz-in" xyz="fade up duration-10">
                  <p>clue : decrypt the Coordinates</p>
                  <a
                    href={MorseURL}
                    target="_blank"
                    rel="noreferrer"
                    download="morse.wav"
                  >
                    <button>Coordinates.wav</button>
                  </a>
                </div>
              );
            case 1:
              return (
                <div className="clue xyz-in" xyz="fade up duration-10">
                  <p>clue : Run the program</p>
                  <a
                    href={PyURL}
                    target="_blank"
                    rel="noreferrer"
                    download="Somepyfile.py"
                  >
                    <button>Some Python Program</button>
                  </a>
                </div>
              );
            case 2:
              return (
                <div className="clue xyz-in" xyz="fade up duration-10">
                  <p>clue : Some Things are not visible here</p>
                </div>
              );
            case 3:
              return (
                <div className="clue xyz-in" xyz="fade up duration-10">
                  <p>Clue : Solve Me!</p>
                  <a
                    href={treasure}
                    target="_blank"
                    rel="noreferrer"
                    download="trasure.py"
                  >
                    <button>Some Python Program</button>
                  </a>
                </div>
              );
            case 4:
              return (
                <div className="clue xyz-in" xyz="fade up duration-10">
                  <p>Clue : this is a number +91 - _ _ _ _ _ _ _ _ _ _</p>
                  <a
                    href={treasure}
                    target="_blank"
                    rel="noreferrer"
                    download="trasure.py"
                  >
                    <button>Some Python Program</button>
                  </a>
                </div>
              );

            default:
              return (
                <div className="clue">
                  <p>clue : decrypt the morse code</p>
                  <button>MorseCode.mp3</button>
                </div>
              );
          }
        })()}

        <form
          className="ty__storyForm"
          onSubmit={(e) => {
            e.preventDefault();
            checkKey();
          }}
        >
          <span>
            <label htmlFor="coords">
              {(() => {
                switch (chapterCount) {
                  case 0:
                    return "Paste the co-ordinates";
                  case 1:
                    return "Enter key!";
                  case 2:
                    return "Enter the password to go to Dock Area";
                  case 3:
                    return "Enter my code!";
                  case 4:
                    return "This one might be tricky for you";
                  default:
                    return "Enter the key!";
                }
              })()}
            </label>
            <input
              value={key}
              onChange={(e) => setKey(e.target.value)}
              type="text"
              placeholder="ENTER YOUR FLAG"
            />
          </span>
          <button
            onClick={(e) => {
              if (e.detail === 3) {
                setThreeClick(true);
              }
            }}
            type="submit"
          >
            <svg
              width="21"
              height="14"
              viewBox="0 0 21 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6364 7.6364C20.9879 7.28492 20.9879 6.71508 20.6364 6.3636L14.9088 0.636039C14.5574 0.284567 13.9875 0.284567 13.636 0.636039C13.2846 0.987511 13.2846 1.55736 13.636 1.90883L18.7272 7L13.636 12.0912C13.2846 12.4426 13.2846 13.0125 13.636 13.364C13.9875 13.7154 14.5574 13.7154 14.9088 13.364L20.6364 7.6364ZM0 7.9H20V6.1H0V7.9Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
        {error && <h3 className="wrongKey">Sorry wrong key : (</h3>}
      </section>
    </div>
  );
};

export default Story;
