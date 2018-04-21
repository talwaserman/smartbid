require('./style.scss');
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Chart from '../Chart';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <div className="home-page">
         <h1>Home Page.</h1>
         <Chart />
        </div>
      );
  }
}

export default Home;
