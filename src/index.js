import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let counter = 0;



function Item(props){
  return <div class='item'>
    <b>Name:</b> {props.name} <br />
    <b>Price:</b> ${[props.price]}
  </div>;
}

function EpicApp(){
  return <div>
    <Item name='Cheese' price='4.59'/>
    <p> </p>
    <Item name='Epic' price='993494239.32'/>
    <p> </p>
    <Item name='Ice Cream' price='2234, geez expensive'/>
  </div>;
}

const el= <EpicApp />;

ReactDOM.render(el,document.getElementById('root'));

// //props act like objects that get passed in to the function
// function Test(props) {

//   return <p>{"A"+props.title}</p>;

// }



// const el = <Test title="X" />; 

// ReactDOM.render(

//   el, 

//   document.getElementById('root')

// );


// //Class components are typically used when there are more advanced user interactions, like forms, and animations.
// // All class components need to extend the React.Component class. 
// //you can also use props inside class by doing this.props.key
// class Hello extends React.Component{
//   render(){
//     return <h1>hello world class compenent and prop in class compenent {this.props.name}.</h1>;
//   }
// }

// const el =<Hello name='epic'/>

// ReactDOM.render(el,document.getElementById('root'));

// //Remember, all component names need to start with a capital letter.
// function Hello(){
//   return <h1>hello world functional compenent</h1>
// }
// const el =<Hello />;

// ReactDOM.render(el,document.getElementById('root'));



// Rembmer using jsx is with {variable}
// function show() {
//   counter++;
//   const insert = <p>epic insert {counter}</p>;
//   ReactDOM.render(
//     <div className="App">
//       <h1>hello world!</h1>
//       {insert}
//     </div>,
//     document.getElementById('root')
//   );
// }
// setInterval(show, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
