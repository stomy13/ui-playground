import React from 'react'
import ReactDOM from 'react-dom/client'
import { Providers } from './providers/Providers'
import './index.css'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!, {
  onCaughtError: error => {
    // React 19: Error Boundary でキャッチされているため、無視してもいい
    console.info('caught', error)
  },
}).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
)
