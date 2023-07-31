import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";

const Detail = () => {
  const [post, setpost] = useState([])
  const [genres, setgenres] = useState([])
  const [loading, setloading] = useState(false)

  const id = useParams()
  useEffect(() => {
    setloading(true)
    axios.get(`https://api.themoviedb.org/3/movie/${id.data}?api_key=04c35731a5ee918f014970082a0088b1`)
      .then(res => {
        setpost(res.data)
        setgenres(res.data.genres);
        setloading(false)
      })
  }, [])

  const func = () => {
    const a = Math.round(post.vote_average) / 2
    const b = '⭐⭐⭐⭐⭐✩✩✩✩✩'.slice(5 - a, 10 - a)
    return b
  }
  return (
    <div>
      {
        loading ?
          <div className='h-[90vh] items-center flex w-[100%] justify-center m-auto'>
            <FadeLoader
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
          <div>
            <div className='m-auto w-full text-center justify-center items-center text-5xl text-blue-500'>{post.name}</div>
            <div className='my-[10px] flex md:flex-row flex-col m-auto w-[90%] md:justify-between'>
              <div className="w-full md:w-[50%] h-[90vh] flex">
                <img src={`https://image.tmdb.org/t/p/w1280${post.poster_path}`} className='w-full h-full' alt="" />
              </div>
              <div className='w-full md:w-[40%] flex justify-center flex-col space-y-3 text-lg font-blue-400'>
                <div className='font-bold text-blue-700 text-2xl text-center'>
                  {post.title}
                </div>
                <div>
                  {post.overview}
                </div>
                <div className='font-bold '>
                  Release Date :- {post.release_date}
                </div>
                <div>
                  {func()}
                </div>
                <div className='flex flex-wrap '>
                  {
                    genres.map((pro, i) => (
                      <p className='bg-blue-700 my-2 mx-[10px] py-[5px] px-3 rounded-full text-white'>{pro.name}</p>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
      }

    </div>
  )
}

export default Detail