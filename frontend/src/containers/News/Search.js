import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display.js';
import './Display.css';
import Outlet from './Outlet.js';
import './Outlet.css';

class Search extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
      count: 0,
      // value:'bbc-news'
      value: this.props.default
    };
    this.handleChange = this.handleChange.bind(this);

    this.apiUrl = `https://newsapi.org/v2/sources?language=en&apiKey=4577c98d7c8a41f6a144ee2c492e95bc`;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  // Lifecycle method
  componentWillMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl).then(res => {
      // Set state with result
      this.setState({ data: res.data.sources });
      this.setState({ count: res.data.sources.length });
      //console.log(this.state.data);
      console.log(this.state.value);
    });
  }

  render() {
    return (
      <div className="">
        <div className="current_team">
        <h2 className="news-header">Sustainability News</h2>
        <h3 className="news-subheader">Read from {this.state.count} News Outlets</h3>
        <select value={this.state.value} onChange={this.handleChange} class="select">
          {this.state.data.map((outlet, i) => {
            return (
              <option key={i} value={outlet.id}>
                {outlet.name}
              </option>
            );
          })}
        </select>
        
        <Outlet default={this.state.value} />
        </div>
        <Display default={this.state.value} />
        
      </div>
    );
  }
}

export default Search;
