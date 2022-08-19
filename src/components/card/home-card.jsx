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
                  I am an Agile Methodologies Professional with over 12 years
                  experience working with software development teams and over 20
                  years IIOT power generation and solutions experience. I have
                  expertise in new (software) product development, agile
                  training and coaching, team building, collaborating, and
                  demonstrating empathy. Additionally, my technical skill set
                  includes full stack web development at a junior developer
                  level. I have a reputation for being empathetic, supportive,
                  flexible, articulate, and detail oriented.
                </p>
                <br />
                <p className="flow-text">
                  I have 2 grown children, Matthew & Nathan with my lovely wife
                  Silvia, and we currently reside in Mechanicsville, VA. We've
                  just relocated after 25 years in Atlanta, GA and am settling
                  in nicely to this suburb of Richmond. This unincorporated
                  community with a population of ~37,000 is proving to be one of
                  the nicest rural localities, along with close proximity to
                  family, makes this is an idyllic location.
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
