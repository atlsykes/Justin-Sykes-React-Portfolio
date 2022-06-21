import React from "react";
import MyPic from "../../Assets/Images/IMG_1428_GC_2018.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cards.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const homecard = () => {
  return (
    <div>
      <div className="row">
        <div>
          <div id="AM-title-block" className="z-depth-5">
            <h2>About Me</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-image">
              <img
                id="home-image"
                className="z-depth-3"
                src={MyPic}
                alt="sykes headshot w/son"
              />
              <div className="card-content">
                <p className="flow-text">
                  Mid-career digital minded professional with proven ability to
                  match business goals with engineering and timed software value
                  delivery. Self proclaimed Agilist leveraging the art of
                  "Maximizing the amount of work not done" to enable high
                  performing teams. I have a continuous growth mindset, always
                  seeking to enhance my agile coaching skills and technical
                  competency for modern software development. I've recently
                  expanded my toolbox of software development skills via
                  enrollment in the Georgia Tech Full-Stack Coding Boot Camp
                  (MERN development stack).
                </p>
                <p className="flow-text">
                  I have 2 grown children, Matthew & Nathan with my lovely wife
                  Silvia, and we currently live in Marietta, GA. We've been
                  living in Georgia for over 23 years and have grown very
                  accustomed to the "southern lifestyle with a somewhat
                  metropolitan feel" in Atlanta. With all the green space,
                  southern hospitality, access to extensive outdoor activities
                  year round, lower cost of living, northern GA feels like
                  paradise to us.
                </p>
                <br />
                <p className="flow-text">
                  "Whether you think you can, or you think you can't – you're
                  right!" - Henry Ford.
                </p>
              </div>
              <div className="card-action">
                <a
                  href="https://www.linkedin.com/in/justin-sykes-csm-cspo-36819658/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/atlsykes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homecard;
