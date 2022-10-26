import React, { Component } from 'react';
import Agency from './agency';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      setName: '',
      filteredList: this.props.agencies
    }
  }

  renderList = () =>  {
    return this.state.filteredList.map(agency => {
      return <Agency agency={agency} key={agency.name}/>
    })
  }

  filterFunction = (e) => {
    const query = e.target.value;
    const regexp = new RegExp(query, 'i');
    let updatedList = [...this.props.agencies]
    updatedList = updatedList.filter((agency) => {
      return agency.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || regexp.test(agency.tags)
    });
    this.setState({filteredList: updatedList})
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search" className="search-bar" onChange={this.filterFunction} />
        <div className='container'>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default List;
