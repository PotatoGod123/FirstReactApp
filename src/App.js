import logo from './logo.svg';
import './App.css';

let counter = 0;

function App() {
  counter++;
  const insert = <p>epic insert{counter}</p>;
  return (
    <div className="App">
      <h1>hello world!</h1>
      {insert}
    </div>
  );
}


export default App;



// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>