import React from 'react';
import { calculateResults } from 'Functions'
import { ResultCard } from './ResultCard'

class Results extends React.Component {
  constructor(props){
    super(props);
    // This binding is necessary to make `this` work in the callback
    // this.simpleAction = this.simpleAction.bind(this);
    // this.gagh = this.gagh.bind(this);

    // const Results = (calculateResults(500,5)).map( (resultObject ) => <ResultCard title={resultObject.title} /> )
  }

  componentDidMount() {
    // console.log('I was triggered during componentDidMount')
    // this.addEventListener("wheel", event => this.scrollLeft -= (event.deltaY););

    // 'mousewheel', function(event, delta) {
    //     // console.log(event.deltaX, event.deltaY, event.deltaFactor);
    //     // this.scrollLeft -= (-event.deltaX);
    //     this.scrollLeft -= (event.deltaY);
    //     // this.scrollLeft -= (delta);
    //     event.preventDefault()
  }

  render(){
    // const button = <button>Test redux action</button>
    // return(JSON.stringify(calculateResults(500,5) ) )
    const Json = calculateResults(this.props.size,this.props.strength,this.props.systemOfMeasurement) 
    console.log(this.props.systemOfMeasurement)
    console.log(Json)
    return (
      // button
      <div className="container-fluid bar" id="results">
        {/*<pre> {JSON.stringify(this.props)} </pre>*/}
        {/*<ReduxTestButton theEvent={this.props.simpleAction} {...this.props} />*/}
        {/*<ResultCard title="Units" number="3.5"/>*/}
        {Json.map( (resultObject,index) => <ResultCard title={resultObject.title} number={resultObject.number} key={index}/> )}
        
      </div>
      )
    // return <div>results {this.props.test}.</div>
  }
}

export { Results }