import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import { Providers } from './providers/Providers'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
