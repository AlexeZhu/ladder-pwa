// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'  // 👈 注意是 './App' 不是 './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)