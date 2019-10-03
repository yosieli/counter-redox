import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import ReduxThunk from 'redux-thunk'


const middleware = compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducer, middleware);
export default store