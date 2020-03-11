// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends React.Component{
    goodConsole = () => {
        console.log("Good!")
    }

    heyConsole = () => {
        console.log("Hey! Eyes on me!")
    }
    render(){
        return <button onFocus={this.goodConsole} onBlur={this.heyConsole}/>
    }
}