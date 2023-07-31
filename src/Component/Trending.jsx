import React from 'react';
import Home from './Home';

const Trending = () => {
  return (
    <div>
      <Home api={`https://api.themoviedb.org/3/trending/all/day?api_key=04c35731a5ee918f014970082a0088b1&page=`} />
    </div>
  )
}

export default Trending
