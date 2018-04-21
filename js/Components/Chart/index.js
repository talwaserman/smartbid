require('./style.scss');
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer  } from 'recharts';
import * as actionCreators from './actions';

class Chart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chart-component">
                <ResponsiveContainer>
                    <BarChart width={730} height={250} data={this.props.chartData}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="pv" fill="#8884d8"/>
                        <Bar dataKey="uv" fill="#82ca9d"/>
                    </BarChart>
                </ResponsiveContainer>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    userData: state.UserStatusReducer.userData, 
    chartData: state.ChartReducer.chartData
});
const mapDispatchToProps = dispatch => () => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
