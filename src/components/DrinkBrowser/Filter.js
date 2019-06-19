import React from 'react';

class Filter extends React.Component {
  render(){
    return (
      <div className="container-fluid bar" id="filter">
        <nav id="navbar-categories" className="navbar navbar-light bg-light">
          <ul className="nav nav-pills">
            { this.props.tableData.map( (categoryObject, index) => 
                Object.keys(categoryObject).map( categoryName => 
                <li key={index} className="nav-item category" data-category={categoryName}>
                  <a className="nav-link"  href={`#table-${categoryName}`}>{categoryName}</a>
                </li>
                )
              )
            }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">more</a>
              <div className="dropdown-menu">
                
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" id="showOnlyCurrentSystemDrinks-toggle" href="javascript: toggleShowOnlyCurrentSystemDrinks()"></a>
                <a className="dropdown-item" href="#">info</a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export { Filter }