import React from 'react'
import ReactDOM from 'react-dom/client'
import { Providers } from './providers/Providers'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!, {
  onCaughtError: error => {
    // React 19: Error Boundary でキャッチされているため、無視してもいい
    console.info('caught', error)
  },
}).render(
  <React.StrictMode>
    <Providers></Providers>
  </React.StrictMode>,
)
