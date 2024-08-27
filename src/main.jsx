import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import bodyCss from './css/styles.module.css'; // Ensure this path is correct
      
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App  classame= {bodyCss.main}/>
    {/* <h1 className={bodyCss.app}>Input Bar with Animated Button</h1> */}
  </StrictMode>
);