import React from 'react';
import logo from './logo.png';
import './App.css';
import CardList from './components/CardList';
import './index.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           The Recipes Cards App
//         </p>
//         <a
//           className="App-link"
//           href="#"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//         <img src={logo} className="App-logo" alt="logo" />
//         </a>
//       </header>
//     </div>
//   );
// }

// using class

class App extends React.Component {
  render() {
    return (
<div>
<div className="App">
      <header className="App-header">
        <p>
          The Recipes Cards App
          {/* {this.props.title} */}
        </p>
        {/* <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={logo} className="App-logo" alt="logo" />
        </a> */}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>

  <CardList />
</div>     
      )
  }
}

export default App;
