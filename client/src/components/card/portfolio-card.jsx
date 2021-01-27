import React from 'react';

const portfoliocard = () => {
    return (
<div>
<div class="row">
    <div class="col s12 m12">
      <div class="card">
        <div class="card-image">
          <img src="https://via.placeholder.com/100" alt="app screenshot"/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default portfoliocard;