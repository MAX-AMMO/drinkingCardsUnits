import React from 'react';
import TableRowDrink from './TableRowDrink'

class CategoryTable extends React.Component {
  render(){
    const categoryName = Object.keys(this.props.categoryObject)[0];
    const drinkList = Object.values(this.props.categoryObject)[0]

    return (
      <React.Fragment >
      <h4 className="heading" id={`table-${categoryName}`}>{categoryName}</h4>
      <table className="table">
        <tbody>
          {
          	drinkList.map( (drinkObject, index) => 
	      		<TableRowDrink 
	      			key={index} 
	      			index={index}
	      			categoryName={categoryName}
	      			drinkObject={drinkObject}
	      			selectedTr={this.props.selectedTr}
	      			{...this.props}
	      		/>
          )}
        </tbody>
      </table>
      </React.Fragment>
    )
  }
}

export { CategoryTable }