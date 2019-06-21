import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import {InputsAndResults} from './components/InputsAndResults/InputsAndResults'

import {DrinkBrowser} from './components/DrinkBrowser/DrinkBrowser'

import { simpleAction } from './action-makers/simpleAction';

import { convertUnits } from './Functions'


//https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8

//React-redux mappings
const mapStateToProps = state => ({
 ...state
})
const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

function ReduxTestButton(props) {
  return(
    <div>
      <pre>
       {
        JSON.stringify(props)
       }
      </pre>
      <button onClick={props.theEvent}>Test redux action</button>
    </div>
  )
}

class App extends React.Component {
  constructor(props){
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.simpleAction = this.simpleAction.bind(this);

    this.state = {
      size: 500, 
      strength: 4.5,
      systemOfMeasurement: "metric",
      showDrinksFromBothMSystems: true
    }
    this.setSize = this.setSize.bind(this)
    this.setStrength = this.setStrength.bind(this)
    this.setSystemOfMeasurement = this.setSystemOfMeasurement.bind(this)
    this.toggleShowDrinksFromBothMSystems = this.toggleShowDrinksFromBothMSystems.bind(this)
  }

  // setSize(numberIn){this.setState({size: this.state.systemOfMeasurement = "metric" ? numberIn : convertUnits("floztoml",numberIn)})}
  setSize(numberIn){
    // console.log("state of things "+this.state.systemOfMeasurement)
    // this.setState({size: this.state.systemOfMeasurement === "imperial" ? numberIn : convertUnits("mltofloz",numberIn)})};
    this.setState({size: numberIn});
  }
  setStrength(numberIn){ this.setState({strength: numberIn}) };

  setSystemOfMeasurement(systemIn){
    if (this.state.systemOfMeasurement !== systemIn){
      var newSize = this.state.size
      switch (systemIn){
        case "metric":
            newSize = convertUnits("floztoml", this.state.size)
            break;
        case "imperial":
            newSize = convertUnits("mltofloz", this.state.size)
            break;
      }
      this.setState({size: newSize})
      this.setState({systemOfMeasurement: systemIn});
    }
  }
  toggleShowDrinksFromBothMSystems(){
        this.setState({toggleShowDrinksFromBothMSystems: !this.state.toggleShowDrinksFromBothMSystems});
  }
  //todo show only current system of drinks

  simpleAction = (event) => {
    this.props.simpleAction();
  };

  render(){
    return ( 
          /*<ReduxTestButton theEvent={this.simpleAction} {...this.props} />*/
          // <InputsAndResults {...this.props}/>
          <React.Fragment>
            <div id="left-side">
              <DrinkBrowser 
                setSize={this.setSize} 
                setStrength={this.setStrength}
                systemOfMeasurement={this.state.systemOfMeasurement}
                showDrinksFromBothMSystems={this.state.showDrinksFromBothMSystems}
                toggleShowDrinksFromBothMSystems={this.toggleShowDrinksFromBothMSystems}
                />
            </div>
            <div id="right-side">
              <InputsAndResults 
                size={this.state.size}
                strength={this.state.strength}
                setSize={this.setSize}
                setStrength={this.setStrength}
                systemOfMeasurement={this.state.systemOfMeasurement}
                setSystemOfMeasurement={this.setSystemOfMeasurement}
                />
            </div>
          </React.Fragment>
    );
  }
}

// export default App;
// export default connect()(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);

