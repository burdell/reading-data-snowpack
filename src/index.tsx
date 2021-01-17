import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { App } from '~/components/App'

// import '~/styles/reset.css'
import '~/styles/site.css'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
