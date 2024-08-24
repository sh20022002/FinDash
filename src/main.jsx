import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import bodyCss from './css/styles.module.css'; // Add this line


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
