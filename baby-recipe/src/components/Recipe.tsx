import React from 'react';
import '../index.css';
import RecipeList from './RecipeList';

// const testData = [
//   {name: "Pizza Margherita", avatar_url: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg", main_ingredient: "Flour"},
//   {name: "Breakfast Potatoes", avatar_url: "https://www.themealdb.com/images/media/meals/1550441882.jpg", main_ingredient: "Potatoes"},
//   {name: "Japanese Rice", avatar_url: "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg", main_ingredient: "Rice"},
// ];


class Recipe extends React.Component {
// class Recipe extends React.Component<RecipeProps>{
 
  render() {
    
    // const recipe = testData[0];
    // const recipe = this.props;
    // const recipe = this.props.testData;
    const recipe = this.props.recipe;
    return (
<div className='recipe-card' style={{margin:'1rem'}}> 
{/* <a href="https://placeholder.com/">
<img src="https://via.placeholder.com/70" alt=""/>
</a> */}
         <img src={recipe.avatar_url} alt=""/>
        <div className="info" style={{display:'inline-block', marginLeft:10}}>
          <div className="name" style={{fontSize: '125%'}}>{recipe.name}</div>
          <div className="company">Main Ingredient: {recipe.main_ingredient}</div>
          <a href="#">
          <button>View recipe</button>
</a>
        </div>
        
</div>
    )
  }
}

export default Recipe;
