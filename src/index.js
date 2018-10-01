import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'

import App from './components/App'
import reducer from './reducers'

const middlewares = []

if (process.env.NODE_ENV !== `production`) {
    const logger = createLogger({ collapsed: true })

    middlewares.push(logger)
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
