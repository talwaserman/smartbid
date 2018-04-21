require('./style.scss');
import React, {Component} from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer  } from 'recharts';

class Chart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chart-component component">
                <div className="component-header">
                    <label>Orders</label>
                </div>
               
                    <ResponsiveContainer>
                        <ComposedChart width={300} height={250} data={this.props.chartData}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend verticalAlign="top"/>
                            <Bar dataKey="number_of_orders" fill="darkturquoise"/>
                            <Area type='monotone' dataKey='payments' fill='#8884d8' stroke='#8884d8'/>
                        </ComposedChart>
                    </ResponsiveContainer>
            </div>
        );
    }
}

export default Chart;
