import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import WebApp from '@twa-dev/sdk'

WebApp.ready();
WebApp.setHeaderColor('bg_color')
WebApp.setBackgroundColor('secondary_bg_color')


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
