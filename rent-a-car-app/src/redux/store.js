import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertsReducer } from './reducers/alertsReducer';

import { carsReducer } from './reducers/carsReducer';
import {bookingsReducer} from './reducers/bookingsReducer';
import { usersReducer } from './reducers/usersReducer';





const composeEnhancers = composeWithDevTools({
  
});


const rootReducer = combineReducers({
       carsReducer,
       alertsReducer,
       bookingsReducer,
       usersReducer,

     
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store