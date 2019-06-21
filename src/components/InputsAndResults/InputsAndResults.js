import React from 'react';
import Inputs from './Inputs'
import { Results } from './Results'


class InputsAndResults extends React.Component {
  render(){
    return (
      <div className="container-fluid" id="bottom-stack">
        <Results 
          {...this.props} />
        <Inputs 
          {...this.props}  />
      </div>
      )
  }
}

export { InputsAndResults }