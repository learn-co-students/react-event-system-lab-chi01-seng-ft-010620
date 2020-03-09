import React from "react";

// Code EyesOnMe Component Here
export default class EyesOnMe extends React.Component {

    handleBlur = (event) => {
        console.log('Hey! Eyes on me!')
    }

    handleFocus = (event) => {
        console.log('Good!')
    }

    render() {
        return (
            <button
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}></button>
        )
    }
}