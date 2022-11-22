import React from "react";

const recipeCard = (props) => {
  return (
    <div>
      <div class="row">
        <div class="col s12 m12">
          <h1>{props.title}</h1>
          <h3>Ingredients</h3>
          {/* Build and render ingredients list */}
          <ul>
            {props.ingredients.map((item) => (
              <li key={item.iid}>
                <label>
                  <input type="checkbox" />
                  <span>{item.text}</span>
                </label>
              </li>
            ))}
          </ul>
          <h3>Steps</h3>
          {/* Build and render steps ordered list */}
          <ol>
            {props.steps.map((item) => (
              <li key={item.sid}>{item.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default recipeCard;
