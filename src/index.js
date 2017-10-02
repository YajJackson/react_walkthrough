import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// The following are all equivalent from React's point of view (slight difference with the arrow function)
// function Welcome1(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// const Welcome2 = (props) => {
//   return <h1>Hello, {props.name} </h1>
// }

// class Welcome3 extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

const element = <Welcome name='Jay' />

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

ReactDOM.render(
  element,
  document.getElementById('root')
)