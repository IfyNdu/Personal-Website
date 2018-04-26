import React from 'react';
import ReactDOM from 'react-dom';
import App from './entry-point/App';
//import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import { Provider } from 'react-redux'
import './styles/css/index.css';

ReactDOM
    .render(<Provider store={store}><App /></Provider>
        , document.getElementById('root'));
registerServiceWorker();
