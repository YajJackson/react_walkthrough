import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const formatName = (user) => {
  return user.firstName + ' ' + user.lastName
}

const getGreeting =(user) => {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}
const user = {
  firstName: 'Jay',
  lastName: 'Jackson'
}

// JSX tags may contain children
const element = (
  <div>
    {getGreeting(user)}
  </div>
)

// Babel compiles JSX down to React.createElement() calls.
// const element = (
//   <h1 className='greeting'>
//     Hello, world!
//   </h1>
// )

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'hello, world!'
// )

ReactDOM.render(
  element,
  document.getElementById('root')
)