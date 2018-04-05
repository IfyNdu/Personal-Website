import {
    applyMiddleware,
    createStore,
    combineReducers,
    compose
} from 'redux';
import { createLogger } from 'redux-logger';

//reducers
import appReducer from './entry-point/App.reducer'
import bodyReducer from './containers/body/body.reducer'

const logger = createLogger({
    collapsed: true
})

//middleware

const middleware = applyMiddleware(logger);

const reducers = combineReducers({
    appReducer,
    bodyReducer
})

//redux dev tools

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(middleware));

export default store;