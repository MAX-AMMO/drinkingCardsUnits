import React from 'react';

class ResultCard extends React.Component {
  render(){
    return (
        <div className="result-container result-container-size-1" style={{width: 100 + "px", height: 100 + "px"}}>
          <div className="result-title">
            <div className="text-wrapper">{this.props.title}</div>
          </div>
          <div className="result-number">
            <div className="text-wrapper">{this.props.number}</div>
          </div>
        </div>
      )
  }
}

export { ResultCard }