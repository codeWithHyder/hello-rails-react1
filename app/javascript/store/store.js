import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Import your reducers here if you have multiple reducers
import greetingReducer from './reducers/greetingReducer';

const rootReducer = combineReducers({
  // Add other reducers here if needed
  greeting: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
