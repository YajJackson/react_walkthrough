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

const element = <div>{getGreeting(user)}</div>

ReactDOM.render(
  element,
  document.getElementById('root')
)