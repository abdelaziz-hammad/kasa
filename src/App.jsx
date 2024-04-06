import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/notFound/NotFound';
import About from "./pages/about/About";
import Accomodation from './pages/accomodation/Accomodation';
/**
 * Renders the main application component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accomodation/:id" element={<Accomodation />} />
            <Route path="/pages/about/About" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
