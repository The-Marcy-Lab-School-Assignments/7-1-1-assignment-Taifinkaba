// TODO: Import BrowserRouter and wrap the entire app with it

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RobotProvider from './context/RobotProvider'

/** FEEDBACK: Missing the BrowserRouter here! Make sure to import it and then wrap it around App! */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RobotProvider>
    <App />
  </RobotProvider>
);
