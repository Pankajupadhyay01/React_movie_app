import { React, useState, Suspense, lazy } from 'react'
import './App.css'
const Navbar = lazy(() => import("./Component/Navbar"));
const Home = lazy(() => import("./Component/Home"));
const Search = lazy(() => import("./Component/Search"));
const Trending = lazy(() => import("./Component/Trending"));
const Contact = lazy(() => import("./Component/Contact"));


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Suspense fallback={<p className='flex justify-center items-center m-auto'>Loading...</p>}> <Home /></Suspense>}></Route>
          <Route exact path='/Search' element={<Suspense fallback={<p className='flex justify-center items-center m-auto'>Loading...</p>}><Search /></Suspense>}></Route>
          <Route exact path='/trending' element={<Suspense fallback={<p className='flex justify-center items-center m-auto'>Loading...</p>}><Trending /></Suspense>}></Route>
          <Route exact path='/contact' element={<Suspense fallback={<p className='flex justify-center items-center m-auto'>Loading...</p>}><Contact /></Suspense>}></Route>
        </Routes>

      </div>
    </Router>
  )
}

export default App
