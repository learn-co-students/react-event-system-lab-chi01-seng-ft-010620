import React from "react";

// Code Keypad Component Here
export default class Keypad extends React.Component {

    handleKeyUp = (event) => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input 
            type='password'
            onKeyUp={this.handleKeyUp}>

            </input>
        )
    }
}