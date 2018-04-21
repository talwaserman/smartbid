import axios from 'axios';

// Action creators
import * as ACTION from  './consts';

// export const getFruits = () => {
//     return dispatch => {
//         axios
//             .get('/get_fruits')
//             .then(function (response) {
//                 let fruitsData = {};
//                 response.data.fruits.map(element => {
//                     if(!fruitsData[element.favoriteFruit]) {
//                         fruitsData[element.favoriteFruit] = []; 
//                     }
                    
//                     fruitsData[element.favoriteFruit].push(element.name);
//                 });

//                 dispatch({type: ACTION.GET_FRUITS, payload: formatData(fruitsData)})
//             })
//             .catch(function (error) {
//                 dispatch({type: ACTION.GET_FRUITS, payload: []})
//             });
//     }
// }
