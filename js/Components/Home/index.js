require('./style.scss');
const jsonData = require('../../data.json');
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InfoCard from '../InfoCard';
import Chart from '../Chart';
import Messages from '../Messages';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  formatChartData = (data) => {
    let formatedData = data.map((item) => (
      {
        name: '',
        number_of_orders: item.orders_number,
        payments: item.payments,
        amt: item.orders_number
      }
    ))

    return formatedData;
  }

  render() {
      return(
        <div className="home-page">
          <section>
          <InfoCard cardStyle="dodgerblue" cardLabel="Income" timeSpan="Monthly" cardVal={this.numberWithCommas(jsonData.income.monthly)} lowerPartLable="Total income" lowerPartVal={jsonData.income.delta}/>
          <InfoCard cardStyle="darkturquoise" cardLabel="Orders" timeSpan="Annual" cardVal={this.numberWithCommas(jsonData.orders.annual)} lowerPartLable="New orders" lowerPartVal={jsonData.orders.delta}/>
          <InfoCard cardStyle="darkseagreen" cardLabel="Visits" timeSpan="Today" cardVal={this.numberWithCommas(jsonData.visits.today)} lowerPartLable="New orders" lowerPartVal={jsonData.visits.delta}/>
          <InfoCard cardStyle="indianred" cardLabel="User activity" timeSpan="Today" cardVal={this.numberWithCommas(jsonData.user_activity.today)} lowerPartLable="New orders" lowerPartVal={jsonData.user_activity.delta}/>
          </section>
         <section>
          <Chart chartData={this.formatChartData(jsonData.orders_by_date)} />
         </section>
         <section>
          <Messages messages={jsonData.messages}/>
         </section>
        </div>
      );
  }
}

export default Home;
