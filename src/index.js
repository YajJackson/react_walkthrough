import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Clock extends React.Component {
  // Add a class constructor that assigns the initial this.state
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  // Lifecycle hooks
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  // if the Click component is ever removed from the DOM, the timer is stopped.
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  // Implement tick() method that runs every second
  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)