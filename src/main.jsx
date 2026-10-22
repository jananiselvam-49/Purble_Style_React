import React from 'react';
import { createRoot } from 'react-dom/client';
import PurpleStyle from './PurpleStyle.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode><PurpleStyle /></React.StrictMode>
);
