import { combineReducers } from 'redux';
import toolReducer from './tools/toolReducer';

const rootReducer = combineReducers({
    tool: toolReducer,
})

export default rootReducer;