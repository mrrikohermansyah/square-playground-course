import React, {Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Square from './Square';
import Hideable from './Hideable';

const HideableSquare = Hideable(Square);

class App extends Component {
  render(){
    return(
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wellcome to React</h1>
        </header> */}
        <Square size={100} />
        <HideableSquare isHidden={true} size={100} color="green" />
        <HideableSquare isHidden={false} size={150} color="red" />
      </div>
    );
  }
}
export default App;

// import React, {Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Square from './Square.js';
// //import SimpleSquare from './SimpleSquare';
// //import Exercisesquare from './excercisesquare.js'; 
// //import Square from './excercisesquare.js';
// import Hideable from './Hideable';

// //const HideableSquare = Hideable(Square);

// class App extends Component {
//   render(){
//     return(
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Wellcome to React</h1>
//         </header> */}
//         <Square size={50} />
//         <Square size={50} />
//         {/* <Exercisesquare size={100} initialColor="green" />
//         <Exercisesquare size={150} initialColor="red" /> */}
//       </div>
//     );
//   }
// }

// export default App;


//function App() {
 // return (
   // <div className="App">
      /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/
     // <Exercisesquare color="red" size={50} />       
      //<Exercisesquare initialColor="green" size={100} />
      //<Exercisesquare initialColor="red" size={200} />
    //</div>
    //showTItle = {true/false} | you can insert this command after Square above if you want to use boolean
  //);
//}


