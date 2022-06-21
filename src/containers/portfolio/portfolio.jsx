import React from "react";
import Portfoliocard from "../../components/card/portfolio-card";
import projects from "../../projects.json";
import "./portfolio.css";
//project images
import TrackFinder from "../../Assets/Images/Track-finder-screenshot.png";
import STCC from "../../Assets/Images/senior-travel-covid-care-app-screenshot1.png";
import WeatherDashboard from "../../Assets/Images/Weather-dashboard-screenshot.png";
import Insulterator from "../../Assets/Images/Insulterator9000-screenshot.png";
import WorkoutTracker from "../../Assets/Images/Mongo-fitness-tracker-app-screenshot1.png";
import Flashcardz from "../../Assets/Images/Flashcardz-screenshot.png";
const project = projects.elements;

const portfolio = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div>
            <div id="Port-title-block" className="z-depth-5">
              <h2>Portfolio</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col m4">
            <Portfoliocard
              id={project[0].id}
              image={Insulterator}
              title={project[0].title}
              description={project[0].description}
              GH={project[0].GH}
              deploy={project[0].deploy}
            />
          </div>
          <div className="col m4">
            <Portfoliocard
              id={project[1].id}
              image={Flashcardz}
              title={project[1].title}
              description={project[1].description}
              GH={project[1].GH}
              deploy={project[1].deploy}
            />
          </div>
          <div className="col m4">
            <Portfoliocard
              id={project[2].id}
              image={TrackFinder}
              title={project[2].title}
              description={project[2].description}
              GH={project[2].GH}
              deploy={project[2].deploy}
            />
          </div>
          <div className="col m4">
            <Portfoliocard
              id={project[3].id}
              image={STCC}
              title={project[3].title}
              description={project[3].description}
              GH={project[3].GH}
              deploy={project[3].deploy}
            />
          </div>
          <div className="col m4">
            <Portfoliocard
              id={project[4].id}
              image={WeatherDashboard}
              title={project[4].title}
              description={project[4].description}
              GH={project[4].GH}
              deploy={project[4].deploy}
            />
          </div>
          <div className="col m4">
            <Portfoliocard
              id={project[5].id}
              image={WorkoutTracker}
              title={project[5].title}
              description={project[5].description}
              GH={project[5].GH}
              deploy={project[5].deploy}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
