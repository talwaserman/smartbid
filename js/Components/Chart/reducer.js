import * as CONST from './consts';

const DEFAULT_STATE = {
  chartData: [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    }, {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    }, {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    }, {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    }, {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    }, {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    }, {
      name: 'Page G1',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ]
};

const ChartReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CONST.GET_FRUITS:
      return Object.assign({}, state, { fruitsData: action.payload });
    default:
      return state;
  }
};

export default ChartReducer;
