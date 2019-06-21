import React from 'react';
import { calculateResults } from 'Functions'
import { ResultCard } from './ResultCard'
import $ from "jquery";

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = { currentSize: 100, grow: true }
    this.makeSureResultCardScrollIsObvious = this.makeSureResultCardScrollIsObvious.bind(this)
  }

  makeSureResultCardScrollIsObvious(){
        const currentSize = this.state.currentSize
        var grow = this.state.grow
        const minSize = 100;
        const maxSize = 110;

      //determine if the edge of the window is within 30% and 70% of the way through the w of the results cards
      function isWithinSafeBounds(){
        const value = parseFloat("0." + String( $( window ).width() / $(".result-container:first").outerWidth(true) ).split(".")[1])
        if( (0.3 < value && value < 0.7) ) { return true; }
        else { return false; }
      }
      var firstResultWidth = $(".result-container:first").width()
      
      if ( firstResultWidth <= minSize ){ grow = true;  }
      if ( firstResultWidth >= maxSize ){ grow = false;  }

      var newSize

      while (! isWithinSafeBounds() ) {
        var firstResultWidth = $(".result-container:first").width();
        if ( grow ){ var newSize = firstResultWidth + 1 }
        else { var newSize = firstResultWidth - 1 }
        // console.log("new" + newSize)
        $(".result-container").width( newSize );
        $(".result-container").height( newSize );
      }
      this.setState({currentSize: newSize + 2, grow: grow})
    }

  componentDidMount() {
    this.makeSureResultCardScrollIsObvious()
    window.addEventListener("resize", this.makeSureResultCardScrollIsObvious)
  }

  componentWillUnmount() {
    window.removeEventListener("resize",  this.makeSureResultCardScrollIsObvious);
  }

  render(){
    const Json = calculateResults(this.props.size,this.props.strength,this.props.systemOfMeasurement) 
    // console.log(this.props.systemOfMeasurement)
    // console.log(Json)
    return (
      <div className="container-fluid bar" id="results">
        {Json.map( (resultObject,index) => <ResultCard title={resultObject.title} number={resultObject.number} key={index}/> )}
        
      </div>
      )
    // return <div>results {this.props.test}.</div>
  }
}

export { Results }