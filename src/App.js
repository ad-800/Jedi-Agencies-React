import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import List from './components/list';
import Form from './components/form';

import './App.css';
import agencies from './data/agencies';

class App extends Component {
  render() {
    function Header() {
      return (
        <div>
          <h1>Dark Star Corporation Partners</h1>
          <nav>
            <Link to="/">Home</Link> {" "}
            <Link to="/create">Add Corp</Link>
          </nav>
        </div>
      );
    }

    // Order Agencies
    const master = agencies.filter((agency) => {return agency.grade.indexOf('Master') !== -1});
    const jedi = agencies.filter((agency) => {return agency.grade.indexOf('Jedi') !== -1});
    const padawan = agencies.filter((agency) => {return agency.grade.indexOf('Padawan') !== -1});

    return (
      <div className="App">
        <Router>
          <Header></Header>
          <div className="container">
            <Routes>
                <Route path="/" element={<List agencies={master.concat(jedi).concat(padawan)} />} />
                <Route path="/create" element={<Form />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
