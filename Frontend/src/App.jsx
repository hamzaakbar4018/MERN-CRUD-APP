import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllUsers from './components/AllUsers'; 
import AddUser from './components/AddUser';
import Edit from './components/Edit';

function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-4 bg-gray-100'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alluser" element={<AllUsers />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edit/:id" element={<Edit />} /> {/* Updated route */}
      </Routes>
    </div>
  );
}

export default App;
