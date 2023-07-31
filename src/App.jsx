import { React, useState, Suspense, lazy } from 'react'
import './App.css'
const Navbar = lazy(() => import("./Component/Navbar"));
const Home = lazy(() => import("./Component/Home"));
const Search = lazy(() => import("./Component/Search"));
const Trending = lazy(() => import("./Component/Trending"));
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Loading from './Component/Loading';
const Detail = lazy(()=>import('./Component/Detail'));

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Suspense fallback={<div className='flex justify-center items-center m-auto'> <Loading/> </div>}> <Home /></Suspense>}></Route>
          <Route exact path='/Search' element={<Suspense fallback={<div className='flex justify-center items-center m-auto'> <Loading/> </div>}><Search /></Suspense>}></Route>
          <Route exact path='/trending' element={<Suspense fallback={<div className='flex justify-center items-center m-auto'> <Loading/> </div>}><Trending /></Suspense>}></Route>
          <Route exact path='/detail/:data' element={<Suspense fallback={<div className='flex justify-center items-center m-auto'> <Loading/> </div>}><Detail /></Suspense>}></Route>
          
        </Routes>

      </div>
    </Router>
  )
}

export default App
