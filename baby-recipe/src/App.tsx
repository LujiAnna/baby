import React from 'react';
import logo from './logo.png';
import './App.css';
import RecipeList from './components/RecipeList';
import './index.css';

// using class
class App extends React.Component {
  render() {
    const recipes = [
      {name: "Pizza Margherita", avatar_url: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg", main_ingredient: "Flour"},
      {name: "Breakfast Potatoes", avatar_url: "https://www.themealdb.com/images/media/meals/1550441882.jpg", main_ingredient: "Potatoes"},
      {name: "Japanese Rice", avatar_url: "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg", main_ingredient: "Rice"},
    ];
    
    return (
<div>
<div className="App">
      <header className="App-header">
        <p>
          The Recipes App
          {/* {this.props.title} */}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>

  {/* <RecipeList /> */}
  <RecipeList recipes={this.recipes} />
</div>     
      )
  }
}

export default App;
