require('./style.scss');
import React, {Component} from 'react';

const InfoCard = props => (
  <div className="infoCard-component component">
    <div className="card-header component-header">
      <label>{props.cardLabel}</label>
      <span style={{"backgroundColor": props.cardStyle}}>Monthly</span>
    </div>
    <div className="card-info component-info">
      <div className="top-part">{props.cardVal}</div>
      <div className="bottom-part">
        <label>{props.lowerPartLable}</label>
        <span style={{"color": props.cardStyle}}>{props.lowerPartVal}</span>
      </div>
    </div>
  </div>
);


export default InfoCard;
