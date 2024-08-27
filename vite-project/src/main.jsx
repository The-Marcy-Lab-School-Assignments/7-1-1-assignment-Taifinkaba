// TODO: Import BrowserRouter and wrap the entire app with it

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RobotProvider from './context/RobotProvider'
import { BrowserRouter } from 'react-router-dom';

/** FEEDBACK: Make sure to wrap BrowserRouter around App! */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <RobotProvider>
    <App />
  </RobotProvider>
  </BrowserRouter>
);
