require('./style.scss');
import React, {Component} from 'react';
import Message from './Message';

const Messages = props => (
  <div className="messages-component component">
    <div className="messages-header component-header">
      <label>Messages</label>
      <span>
        <i className="fas fa-angle-up"></i>
        <i className="fas fa-wrench"></i>
        <i className="fas fa-times"></i>
      </span>
    </div>
    <div className="component-info messages-info">
      <div className="messages-inbox">
        <h2>
          <i className="far fa-envelope"></i>
          <span>New messages</span>
        </h2>
        <div>You have {props.messages.new_messages} new messages and {props.messages.waiting_draft_folder} waiting in draft folder</div>
      </div>
      
      {props.messages.messages_list.map((item) => <Message {...item}/>)}
    </div>
  </div>
);


export default Messages;
