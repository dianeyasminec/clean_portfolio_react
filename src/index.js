import ReactDom from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'
import React from 'react'
 

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,

)