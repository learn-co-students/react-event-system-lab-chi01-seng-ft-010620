import React from 'react'; 

export default class EyesOnMe extends React.Component {

    handleFocus = () => {
        console.log('Good!')
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}>I'm a button!</button> 
            </div>
        )
    }


}