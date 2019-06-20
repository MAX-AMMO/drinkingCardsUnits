import React from 'react';
import { connect } from 'react-redux';

import { getSortedTableData } from 'Functions'

import { Filter } from './Filter'
import { Tables } from './Tables'


class DrinkBrowser extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    // selectedTr: null
	      error: null,
	      isLoaded: false,
	      sortedTableData: []
	    };
	 // this.setSelectedTr = this.setSelectedTr.bind(this)
	  }
	// setSelectedTr(thingIn){
	// 	this.setState({
	// 		selectedTr: thingIn
	// 	});
	// }
	componentDidMount() {
	// const sortedTableData = getSortedTableData()
    fetch("https://spreadsheets.google.com/feeds/cells/1b5ABg-gOX1WXl5U5FMTIj5oLXS9KyDyvP6w9ium_dN0/1/public/values?alt=json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            sortedTableData: getSortedTableData(result)
          });

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){
    // const sortedTableData = getSortedTableData()
    console.log(this.state.sortedTableData)
    const { error, isLoaded, sortedTableData } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div></div>;
    } else {
	    return (
	      <React.Fragment>
	      <div className="container-fluid" id="top-stack">
	        {<Filter tableData={sortedTableData} />}
	      </div>
	        <Tables 
	        	tableData={sortedTableData} 
	        	// selectedTr={this.state.selectedTr}
	        	// setSelectedTr={this.setSelectedTr}
	        	{...this.props} />
	      </React.Fragment>
	      )
	  }
	}
}

export { DrinkBrowser }