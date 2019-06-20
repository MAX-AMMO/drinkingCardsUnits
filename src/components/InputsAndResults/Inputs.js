import React from 'react';
import { connect } from 'react-redux';
import { selectTr } from 'action-makers/selectTr';

class Inputs extends React.Component {
  constructor(props){
    super(props)
    this.onSizeChange = this.onSizeChange.bind(this)
    this.onStrengthChange = this.onStrengthChange.bind(this)
    this.handleMeasurementSysChange = this.handleMeasurementSysChange.bind(this)
  }

  onSizeChange(e){
    this.props.setSize(e.target.value);
    this.props.selectTr(null)
  }

  onStrengthChange(e){
    this.props.setStrength(e.target.value);
    this.props.selectTr(null)
  } 

  handleMeasurementSysChange(e){
    switch (e.target.id){
      case "ml-button":
        this.props.setSystemOfMeasurement("metric")
        this.props.selectTr(null)
        break;
      case "floz-button":
        this.props.setSystemOfMeasurement("imperial")
        this.props.selectTr(null)
        break;
      default:
        break;
    }
  }

  render(){
    var mlActiveClass = ""; var flozActiveClass = ""; var unitIndicator;
    switch (this.props.systemOfMeasurement){ 
      case "metric": mlActiveClass = "active"; unitIndicator="ml"; break;
      case "imperial": flozActiveClass = "active"; unitIndicator="floz"; break;
      default: break;}
    return (
        <div className="container-fluid bar" id="input">
          <div id="size-wrapper">
            <div className="input-background"><div className="text-wrapper">{unitIndicator}</div></div>
            <div className="input-group">

              <input  id="size-input" type="number" className="form-control" placeholder="Size" aria-label="Size" aria-describedby="basic-addon2" 
                onChange={this.onSizeChange} value={this.props.size} />

              <div className="btn-group-vertical">
                <button 
                  id="ml-button" 
                  onClick={this.handleMeasurementSysChange} 
                  className={`btn btn-outline-secondary ${mlActiveClass}`} 
                  type="button">ml</button>
                <button 
                  id="floz-button" 
                  onClick={this.handleMeasurementSysChange} 
                  className={`btn btn-outline-secondary ${flozActiveClass}`} 
                  type="button">fl oz</button>
              </div>
            </div>
          </div>

          <div id="strength-wrapper">
            <div className="input-background"><div className="text-wrapper">%</div></div>
            <div className="input-group">
              <input id="strength-input" type="number" className="form-control" placeholder="%" aria-label="Strength" aria-describedby="basic-addon2" onChange={this.onStrengthChange} value={this.props.strength}/>
            </div>
          </div>

        </div>
      )
  }
}

const mapDispatchToProps = dispatch => ({
 selectTr: (trId) => dispatch(selectTr(trId))
})

// export { Inputs }
export default connect( null , mapDispatchToProps)( Inputs );

