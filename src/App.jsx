import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Search from './Component/Search'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Trending from './Component/Trending';
import Contact from './Component/Contact';
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home api={`https://api.themoviedb.org/3/discover/movie?&api_key=04c35731a5ee918f014970082a0088b1&page=`}/>}></Route>
          <Route exact path='/Search' element={<Search />}></Route>
          <Route exact path='/trending' element={<Trending />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>

          
        </Routes>
 

      </div>
    </Router>
  )
}

export default App
