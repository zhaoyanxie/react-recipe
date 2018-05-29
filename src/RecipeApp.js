import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="RecipeApp">
        <Recipe 
          title="Pasta"
          ingredients={["pasta", "bolognese", "basil"]}
          img="pasta.jpg"
          instructions="Follow These Steps. Boil water in a large pot. To make sure pasta doesn't stick together, use at least 4 quarts of water for every pound of noodles. Salt the water with at least a tablespoon—more is fine. The salty water adds flavor to the pasta. Add pasta. Stir the pasta. Test the pasta by tasting it. Drain the pasta."
          
        />
      </div>
    );
  }
}

export default RecipeApp;
