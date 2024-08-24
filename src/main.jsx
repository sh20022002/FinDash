import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import appCss from './css/App.module.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App classname={appCss["app"]} />
      {/* <h1 className={bodyCss.app}>Input Bar with Animated Button</h1> */}
  </StrictMode>
)
