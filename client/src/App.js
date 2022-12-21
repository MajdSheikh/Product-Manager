import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import Detail from './views/Detail';
import Update from './views/Update'

function App() {
  return (
    <div className="App">
      
      <h1>Product Manager</h1>
      <Routes>
        <Route  path="/products/" element={<Main/>} />
        <Route path="/products/:id" element={<Detail/>} />
        <Route path="/products/:id/edit" element={<Update/>} />
    </Routes>
    </div>
  );
}

export default App;
