// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component{
  handleFocus = (event) => {
    console.log('Good!')
  }

  handleBlur = (event) => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <h1> Well hello there
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
      </h1>
    )
  }
}

export default EyesOnMe;
