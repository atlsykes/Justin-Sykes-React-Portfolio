import React, { useState } from "react";
import RecipeCard from "../../components/card/recipe-card";
import "./recipes.css";
import recipeText from "../../recipes.json";
const recipe = recipeText.elements;
let rid = 0;

const Recipes = () => {
  const [recipeID, setRecipeID] = useState();

  //reset all checkboxes upon new recipe selection
  const resetCheck = () => {
    let inputs = document.getElementsByClassName("checkbox");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container z-depth-3">
        <div className="row">
          <div className="col m12">
            <h1>Baked Goods</h1>
            <a
              className="waves-effect waves-light btn"
              onClick={() => {
                setRecipeID(0);
                rid = 0;
                resetCheck();
              }}
            >
              Blueberry Pancakes
            </a>
            <a
              className="waves-effect waves-light btn"
              onClick={() => {
                setRecipeID(1);
                rid = 1;
                resetCheck();
              }}
            >
              Buttermilk Biscuits
            </a>
            <a
              className="waves-effect waves-light btn"
              onClick={() => {
                setRecipeID(2);
                rid = 2;
                resetCheck();
              }}
            >
              Buttermilk Pancakes
            </a>
            <a
              className="waves-effect waves-light btn"
              onClick={() => {
                setRecipeID(3);
                rid = 3;
                resetCheck();
              }}
            >
              Waffles
            </a>
          </div>
        </div>
      </div>
      <div className="container z-depth-3">
        <div className="row">
          <div className="col m12">
            <h1>Instapot</h1>
            <a
              className="waves-effect waves-light btn"
              onClick={() => {
                setRecipeID(4);
                rid = 4;
                resetCheck();
              }}
            >
              Party Wings
            </a>
            <a
              className="waves-effect waves-light btn"
              onClick={() => {
                setRecipeID(5);
                rid = 5;
                resetCheck();
              }}
            >
              Carnitas
            </a>
            <a
              className="waves-effect waves-light btn"
              onClick={() => {
                setRecipeID(6);
                rid = 6;
                resetCheck();
              }}
            >
              Chicken Stock
            </a>
            <a
              className="waves-effect waves-light btn"
              onClick={() => {
                setRecipeID(7);
                rid = 7;
                resetCheck();
              }}
            >
              Ribs
            </a>
            <a
              className="waves-effect waves-light btn"
              onClick={() => {
                setRecipeID(8);
                rid = 8;
                resetCheck();
              }}
            >
              Chicha Morada
            </a>
          </div>
        </div>
      </div>
      <div className="container z-depth-3">
        <div className="row">
          <div className="col m12">
            {/* Display selected recipe card using react state */}
            {setRecipeID ? (
              <RecipeCard
                id={recipe[rid].id}
                image={recipe[rid].image}
                title={recipe[rid].title}
                ingredients={recipe[rid].ingredientsList}
                steps={recipe[rid].steps}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
