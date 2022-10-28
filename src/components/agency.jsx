import React, { Component } from 'react';

class Agency extends Component {
  render() {
    return (
      <div className='agency-list'>
        <h2>{this.props.agency.name}</h2>
        <div className={`badge badge-${this.props.agency.grade}`}><p>{this.props.agency.grade}</p></div>
        <p>{this.props.agency.description}</p>
      </div>
    );
  }
}

export default Agency;
