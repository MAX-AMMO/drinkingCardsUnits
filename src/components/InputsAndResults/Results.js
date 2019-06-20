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
      
      if ( firstResultWidth <= minSize ){ grow = true; console.log("grow") }
      if ( firstResultWidth >= maxSize ){ grow = false; console.log("shrink") }

      var newSize

      while (! isWithinSafeBounds() ) {
        var firstResultWidth = $(".result-container:first").width();
        if ( grow ){ var newSize = firstResultWidth + 1 }
        else { var newSize = firstResultWidth - 1 }
        console.log("new" + newSize)
        $(".result-container").width( newSize );
        $(".result-container").height( newSize );
      }
      this.setState({currentSize: newSize + 2, grow: grow})
    }

  componentDidMount() {
    window.addEventListener( "resize", console.log("resize") );

    this.makeSureResultCardScrollIsObvious()
    window.addEventListener("resize", this.makeSureResultCardScrollIsObvious)
    // console.log('I was triggered during componentDidMount')
    // this.addEventListener("wheel", event => this.scrollLeft -= (event.deltaY););
    // 'mousewheel', function(event, delta) {
    //     // console.log(event.deltaX, event.deltaY, event.deltaFactor);
    //     // this.scrollLeft -= (-event.deltaX);
    //     this.scrollLeft -= (event.deltaY);
    //     // this.scrollLeft -= (delta);
    //     event.preventDefault()
  }

  componentWillUnmount() {
    window.removeEventListener("resize",  this.makeSureResultCardScrollIsObvious);
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