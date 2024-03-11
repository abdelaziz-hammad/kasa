import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
