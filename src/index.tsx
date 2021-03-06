import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import './utils/CrossBrowserSupport'

import RouterContainer from './component/router/RouterContainer'

ReactDOM.render(<RouterContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
