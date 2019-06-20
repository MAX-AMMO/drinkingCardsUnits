import React from 'react';
import Inputs from './Inputs'
import { Results } from './Results'


class InputsAndResults extends React.Component {
  // setStrength(numberIn){this.setState({strength: numberIn})}
  render(){
    // console.log("State is " + JSON.stringify(this.state))
    return (
      <div className="container-fluid" id="bottom-stack">
        <Results 
          // test="cool" 
          // size = {this.props.size}
          // strength = {this.props.strength}
          {...this.props} />
        <Inputs 
          // setSize={this.props.setSize} 
          // setStrength={this.props.setStrength} 
          // size = {this.props.size}
          // strength = {this.props.strength}
          {...this.props}  />
      </div>
      )
  }
}
// fix the props being passed down. They work if it's the first level

const test = "Hello! I'll be a weird state representation until the app is complete."


export { InputsAndResults }