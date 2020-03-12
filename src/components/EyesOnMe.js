// Code EyesOnMe Component Here
import React from 'react';



export default class EyesonMe extends React.Component {

    handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    handleFocus = () => {
        console.log("Good!")
    }

render() {
    return (
        <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur} className="eyes">  </button>
        </div>
    )
}
}
