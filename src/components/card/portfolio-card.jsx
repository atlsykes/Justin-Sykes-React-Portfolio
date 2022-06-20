import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const portfoliocard = (prop) => {
  return (
    <div>
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img
            id={prop.id}
            class="activator"
            src={prop.image}
            alt="project splash screen"
          />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {prop.title}
            <i class="material-icons right">more_vert</i>
          </span>
          <h3>
            <a href={prop.GH} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a id="rocket" href={prop.deploy} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faRocket} />
            </a>
          </h3>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {prop.title}
            <i class="material-icons right">close</i>
          </span>
          <p>{prop.description}</p>
        </div>
      </div>
    </div>
  );
};

export default portfoliocard;
