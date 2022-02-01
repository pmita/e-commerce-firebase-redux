import React from 'react'
//COMPONENTS
import Navbar from './components/Navbar';
//ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Banner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
