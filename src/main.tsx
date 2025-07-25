import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
