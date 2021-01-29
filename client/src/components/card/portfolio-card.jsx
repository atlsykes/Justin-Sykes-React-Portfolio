import React from 'react';
import image from '../../Assets/Images/Tracker-Finder-app.png'

const portfoliocard = (props) => {
    return (
<div>
<div className="row">
    <div className="col s12 m12">
      <div className="card">
        <div className="card-image">
          <img src={require(props.image)} alt="app screenshot"/>
          <span className="card-title">{props.title}</span>
        </div>
        <div className="card-content">
          <p>{props.description}</p>
        </div>
        <div className="card-action">
          <a href={props.link}>Github Repo</a>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default portfoliocard;