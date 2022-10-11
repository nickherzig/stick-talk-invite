import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Home from "./pages/Home"
import Info from "./pages/Info"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  </MemoryRouter>
);

