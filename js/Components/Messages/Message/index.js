require('./style.scss');
import React, {Component} from 'react';

const Message = props => (
  <div className="component message-component">
    <div className="message-header">
      <label>{props.name}</label>
      <span>{props.time_ago}</span>
    </div>
    <div className="component-info message-info">
      <div className="email-teaser">{props.title}</div>
      <div className="email-date">{props.date_label}</div>
    </div>
  </div>
);


export default Message;
