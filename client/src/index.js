import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from "react-redux";
import {compose}  from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { rootReducer } from './redux/reducers/rootReducer';

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Provider store={store}>
<App/>
</Provider>
</BrowserRouter>)