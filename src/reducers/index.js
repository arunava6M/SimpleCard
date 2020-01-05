import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import loggerReducer from './loggerReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    logger: loggerReducer
});
export default rootReducer;