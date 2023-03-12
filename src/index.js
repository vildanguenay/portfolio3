import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Blog } from './components/Blog';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio3" element={<App />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
