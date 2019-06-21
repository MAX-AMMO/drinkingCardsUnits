import React from 'react';
import { connect } from 'react-redux';
import { selectTr } from 'action-makers/selectTr'
import { round } from 'Functions'

class TableRowDrink extends React.Component {
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		this.props.systemOfMeasurement === "imperial" ?
		this.props.setSize(e.currentTarget.getAttribute('data-imperial-size')) :
		this.props.setSize(e.currentTarget.getAttribute('data-metric-size'))
		
		this.props.setStrength(e.currentTarget.getAttribute('data-strength'))
		const id = e.currentTarget.getAttribute('id')
		if (!(id === this.props.selectedTr)){ 
			// TODO window.navigator.vibrate(100);
		}
		this.props.selectTr(id)
	}
	render() {
		const categoryName = this.props.categoryName
		const index = this.props.index
		const drinkObject = this.props.drinkObject
		const id = categoryName+index
		var activeClass

		this.props.selectedTr === id ? activeClass = "active" : activeClass = null

		let sizeTd;
		if ( this.props.systemOfMeasurement === "metric" ) { 
			sizeTd = 
				<td className="row-size metric">
	              {round(drinkObject.metricSize)} ml
	            </td>}
	    else if ( this.props.systemOfMeasurement === "imperial" ) { 
			sizeTd = 
				<td className="row-size imperial">
	              {round(drinkObject.imperialSize)} floz
	            </td>}

	return (
			<tr 
	          	id={ id }
	          	onClick={this.handleClick}
	          	data-metric-size={drinkObject.metricSize}
	          	data-imperial-size={drinkObject.imperialSize}
	          	data-strength={drinkObject.strength}
	          	className = {activeClass}
			>

	            <td className="row-image">
	            </td>
	            <td className="row-name">
	              {drinkObject.name}
	            </td>

	            {sizeTd}
	             
	            <td className="row-strength">
	              {drinkObject.strength} %
	            </td>
          	</tr>
		)
	}
}

const mapStateToProps = state => ({
 // ...state
 // test: console.log(state),
 selectedTr : state.trSelectReducer.selectedTr
})
const mapDispatchToProps = dispatch => ({
 selectTr: (trId) => dispatch(selectTr(trId))
})

export default connect(mapStateToProps, mapDispatchToProps)( TableRowDrink );