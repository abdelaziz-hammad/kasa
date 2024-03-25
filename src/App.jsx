import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
