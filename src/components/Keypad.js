// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component{

  handleKeyStroke = (event) => {
    console.log('Entering password...')
  }
  render(){
    console.log('keypad')
    return(
      <h1>Enter Password:
        <input onKeyUp={this.handleKeyStroke} type="password">
        </input>
      </h1>
    )
  }
}

export default Keypad;

// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.
// Eyes on the ball
// Let's say you're in the club with your buddy. The music's blaring, lights are flashing... It's so hard to get his attention! Your job is to create a component that registers whenever he focuses on you, and when his eyes are drifting off.
//
// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button.
// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
