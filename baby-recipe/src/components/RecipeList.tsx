import React from 'react';
import Recipe from './Recipe';
// import { recipe } from './Recipe';


// const RecipeList = (props) => (
const RecipeList = ({recipes} ) => (recipes.map(recipe => <Recipe recipe={recipe} />)
  // <div>
    // {/* <Recipe />
    // <Recipe />
    // <Recipe />  */}
    // {/* <Recipe {...testData[0]} />
    // <Recipe {...testData[1]} /> */}
    
  // </div>
)

export default RecipeList;