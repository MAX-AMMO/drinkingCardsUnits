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
    // These 6 lines would be better suited to a higher level component as they change the body.
    // Set padding and margins so scrollspy lines up correctly
    $("body").css("padding-top", $("#top-stack").height() + 10)
    $("body").css("padding-bottom", $("#bottom-stack").height() + 10)
    $(".heading").css("padding-top", $("#top-stack").height() )
    $(".heading").css("margin-top", -$("#top-stack").height() )
    $("#size-wrapper .input-background").width( $("#size-input").width() + 24)
    $("#strength-wrapper .input-background").width( $("#strength-input").width() + 24)
   

    //arrange navbar categories
    while ( $("#navbar-categories").height() < 70 && $("#navbar-categories ul .nav-item").is(":hidden")){
      const element = $("#navbar-categories ul .nav-item.category:hidden:first")
      element.show()
      const category = element.attr("data-category")
      if($("#navbar-categories .dropdown-menu").children("a[data-category='"+category+"']").length !== 0 ){
        $("#navbar-categories .dropdown-menu a[data-category='"+category+"']").remove()
      }
    }
    while ( $("#navbar-categories").height() >= 70 ){
      const element = $("#navbar-categories ul .nav-item.category:visible:last")
      element.hide()
      const category = element.attr("data-category")
      if($("#navbar-categories .dropdown-menu").children("a[data-category='"+category+"']").length === 0 ){
        $("#navbar-categories .dropdown-menu").prepend('<a class="dropdown-item" data-category="'+category+'" href="#table-'+category+'">'+category+'</a>')
      }
    }
  }

  render(){
    return (
      <div className="container-fluid" id="main">
        {
      this.props.tableData.map( (categoryObject, index) =>  <CategoryTable categoryObject={categoryObject} key={index} {...this.props}/>)
        }
      </div>
    )
  }
}

export { Tables }