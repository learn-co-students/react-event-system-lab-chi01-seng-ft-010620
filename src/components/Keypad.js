// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends React.Component{
    tickleMe = () => {console.log("Entering password...")}

    render(){
        return <input onKeyUp={this.tickleMe} type="password"/>
    }
}


