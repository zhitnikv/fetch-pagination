import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { getTodos } from './actions';

fetch('http://www.mocky.io/v2/5b45bf212f00008900420d5e')
  .then(response => response.json())
  .then(todos => store.dispatch(getTodos(todos)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

registerServiceWorker();
