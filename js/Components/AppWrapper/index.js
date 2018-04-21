require('./style.scss');
import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default AppWrapper;
