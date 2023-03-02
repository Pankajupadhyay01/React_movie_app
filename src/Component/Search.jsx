import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const Button = () => {
  const [name, setname] = useState("minions");
  const [search, setSearch] = useState([]);
  const [page, setpage] = useState(1);
  const [total, settotal] = useState();


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${name}&page=${page}`)
      .then(res => {
        setSearch(res.data.results)
        settotal(res.data.total_pages)

      }).catch(e => {
        alert("Oops Somthing Went wrong")
      });

  }, [name, page]);

  const list = (e) => {
    if (e.target.value == "") {
      setname("minions")
    }

    else {
      const a = e.target.value
      console.log(a);
      setname(a)
    }

  }

  function next() {
    if (page < total) {
      const a = page + 1;
      setpage(a)
      console.log(page)
      console.log({total})
    }
    else{
      alert("Oops..! No more Matches available")
    }
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  function pre() {
    if (page > 1) {
      const a = page - 1;
      setpage(a)
    }

    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <>
      <input className='flex m-auto border-[2px] text-center my-[3vh] border-solid border-black h-[6vh] w-[33vh] rounded-[10vh]' type="text" placeholder='Search your Movie' onChange={list} />

      <div className="flex justify-center md:justify-between w-[80%] m-auto items-center p-[20px] flex-wrap">

        {
          search.map(pro => (
            <Cards key={pro.id}
              imgs={pro.poster_path}
              title={pro.title}
              name={pro.name}
              date={pro.release_date}
              vote={pro.vote_average} />
          ))
        }
      </div>
      <div className='flex justify-between w-[70%] m-auto'>
        <button onClick={pre} className="text-white bg-red-900  text-xl  text-center  items-center justify-center"> <ion-icon name="arrow-back-outline"></ion-icon>Previous </button>
        <button onClick={next} className="text-white bg-red-900 text-xl text-center  items-center justify-center">Next<ion-icon name="arrow-forward-outline"></ion-icon></button>
      </div>
    </>
  );
}

export default Button;
