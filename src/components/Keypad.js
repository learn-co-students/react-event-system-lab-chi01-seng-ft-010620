// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
    
    keyLogger = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <div>
                <input onKeyUp={this.keyLogger} type="password" />
            </div>
        )
    }
}

export default Keypad