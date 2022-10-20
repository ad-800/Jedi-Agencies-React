import React, { Component } from 'react';
import agencies from '../data/agencies';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      tags: '',
      grade: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Here');
    console.log(this.state.name);
    agencies.push(
      {
        name: this.state.name,
        description: this.state.description,
        tags: this.state.tags,
        grade: this.state.grade
      }
    );
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>Corporation Name
          <input name="name" type="text" onChange={this.handleChange} />
        </label>
        <label>Description
          <input name="description" type="text" onChange={this.handleChange} />
        </label>
        <label>Tags
          <select name="tags" multiple={true} onChange={this.handleChange}>
              <option value="industry">Industrial</option>
              <option value="government">Governmental</option>
              <option value="economy">Economic</option>
              <option value="weapons">War</option>
          </select>
        </label>
        <label>Grade
          <select name='grade' onChange={this.handleChange}>
              <option value="master">Master</option>
              <option value="jedi">Jedi</option>
              <option value="padawan">Padawan</option>
          </select>
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
