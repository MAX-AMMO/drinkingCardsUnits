import React from 'react';

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
	  }
	componentDidMount() {
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
    // console.log(this.state.sortedTableData)
    const { error, isLoaded, sortedTableData } = this.state;
    if (error) {
      return  (	<div class="alert alert-danger" role="alert">
				  Couldn't Load Data From the API. :-(
				</div>
      		)
    } else if (!isLoaded) {
      return <div className="d-flex justify-content-center">
      			<div className="spinner-border text-primary" role="status" style={{height: '20rem',width: '20rem',marginTop: '5rem'}}>
			    	<span className="sr-only">Loading...</span>
			 	</div>
			 </div>;
    } else {
	    return (
	      <React.Fragment>
	      <div className="container-fluid" id="top-stack">
	        {<Filter tableData={sortedTableData} />}
	      </div>
	        <Tables 
	        	tableData={sortedTableData} 
	        	{...this.props} />
	      </React.Fragment>
	      )
	  }
	}
}

export { DrinkBrowser }