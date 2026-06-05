import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './features/websiteTools/App.css'
import App from './features/websiteTools/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
