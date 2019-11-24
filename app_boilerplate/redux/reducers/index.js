import { combineReducers } from 'redux';

import InputReducer from './InputReducer';

console.log('entro en Combine Reducers');
const reducers = combineReducers({
    //   dateState: setDateReducer,
    //   discoState: discoReducer
    inputState: InputReducer,
})

export default reducers;