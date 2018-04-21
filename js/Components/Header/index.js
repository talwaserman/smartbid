require('./style.scss');
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../AppWrapper/actions';

const Header = props => (
  <div className="header-component">
    header
  </div>
);

const mapStateToProps = state => ({
  userData: state.UserStatusReducer.userData,
});

const mapDispatchToProps = dispatch => () => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
