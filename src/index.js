import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

import {createStore} from 'redux'
import reducer from './reducers'
import middleware from './middlewares'
import { Provider } from 'react-redux'


const store=createStore(reducer,middleware);

ReactDOM.render(
    <Provider store={store}>
          <App />
    </Provider>
, document.getElementById('root'))
