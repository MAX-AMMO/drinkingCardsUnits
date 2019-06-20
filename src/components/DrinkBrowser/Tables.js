import React from 'react';
import { CategoryTable } from './CategoryTable'
// import { setLayout } from 'Functions'
import $ from "jquery"

class Tables extends React.Component {
  constructor(props){
    super(props)
    this.setLayout = this.setLayout.bind(this)
  }

  componentDidMount(){
    this.setLayout()
    window.addEventListener("resize", this.setLayout)
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.setLayout)
  }

  setLayout(){
    //arrange navbar categories
    // console.log("set layout hit")
    while ( $("#navbar-categories").height() < 70 && $("#navbar-categories ul .nav-item").is(":hidden")){
      const element = $("#navbar-categories ul .nav-item.category:hidden:first")
      element.show()
      const category = element.attr("data-category")
      if($("#navbar-categories .dropdown-menu").children("a[data-category='"+category+"']").length != 0 ){
        $("#navbar-categories .dropdown-menu a[data-category='"+category+"']").remove()
      }
      // console.log("1")
    }
    while ( $("#navbar-categories").height() >= 70 ){
      const element = $("#navbar-categories ul .nav-item.category:visible:last")
      element.hide()
      const category = element.attr("data-category")
      if($("#navbar-categories .dropdown-menu").children("a[data-category='"+category+"']").length == 0 ){
        $("#navbar-categories .dropdown-menu").prepend('<a class="dropdown-item" data-category="'+category+'" href="#table-'+category+'">'+category+'</a>')
      }
      // console.log("2")
    }
  }

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