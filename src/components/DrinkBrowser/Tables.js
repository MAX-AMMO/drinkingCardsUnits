import React from 'react';
import { CategoryTable } from './CategoryTable'

class Tables extends React.Component {
  render(){
    return (
      <div className="container-fluid" id="main">
        {
          // JSON.stringify(this.props.tableData)
      this.props.tableData.map( (categoryObject, index) =>  <CategoryTable categoryObject={categoryObject} key={index} {...this.props}/>)
        }
      </div>
    )
  }
}

export { Tables }