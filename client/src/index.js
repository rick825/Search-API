import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Target container '#root' not found in the document.");
} else {
  createRoot(rootElement).render(
    <>
      <App />
      <ToastContainer />
    </>
  );
}