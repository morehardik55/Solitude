import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from '../components/Navbar.jsx';  // Also fixed path - use single slash after '..'
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <> <Navbar />
      <App />
    </>
  </StrictMode>,
);
