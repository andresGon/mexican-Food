import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LinkTree from './components/linkTree';
import MenuDigital from './components/digitalMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LinkTree />} /> 
        <Route path='/Menu' element={<MenuDigital />} />
      </Routes>
      
    </Router>
  )
}

export default App
