import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/notFound/NotFound';
import About from "./pages/about/About";
import ListingDetails from "./service/ListingDetails";
import Accomodation from './pages/accomodation/Accomodation';
function App() {
  return (
    <>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accomodation/:id" element={<Accomodation />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
