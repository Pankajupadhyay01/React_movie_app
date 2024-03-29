import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FadeLoader from "react-spinners/FadeLoader";

import Cards from './Cards';
import { Link } from 'react-router-dom';
const Home = ({ api }) => {
    const [post, setpost] = useState([]);
    const [page, setpage] = useState(1);
    const [total, settotal] = useState();
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        axios.get(`${api}+${page}`)

            .then(res => {
                setpost(res.data.results)
                setloading(false)
                settotal(res.data.total_pages)

            }).catch(e => {
                alert("Something Went Wrong ")
            })

    }, [page]);

    console.log();
    function next() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (page < total) {
            const a = page + 1;
            setpage(a)
        }
        else {
            alert("Oops..! No more Data")
        }

    }

    function pre() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (page > 1) {
            const a = page - 1;
            setpage(a)

        }
    }

    return (
        <>
            {
                loading ?
                    <div className='h-[90vh] flex w-[100%] justify-center m-auto'>
                        <FadeLoader
                            loading={loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    <div>
                        <div className="flex justify-center md:justify-between w-[80%] m-auto items-center p-[20px] flex-wrap">

                            {
                                post.map((pro,i) => (
                                    <Link key={i} to={"/detail/" + pro.id} className="flex pb-[10px] flex-col flex-wrap justify-center items-center m-auto w-[100%] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)] hover:translate-y-[-3px] " >
                                        <Cards
                                            imgs={pro.poster_path}
                                            title={pro.title}
                                            name={pro.name}
                                            date={pro.release_date}
                                            vote={pro.vote_average} />
                                    </Link>
                                ))
                            }


                        </div>

                        <div className='flex justify-between w-[70%] m-auto'>
                            <button onClick={pre} className="text-white bg-red-900  text-xl  text-center  items-center justify-center"> <ion-icon name="arrow-back-outline"></ion-icon>Previous </button>
                            <button onClick={next} className="text-white bg-red-900 text-xl text-center  items-center justify-center">Next<ion-icon name="arrow-forward-outline"></ion-icon></button>
                        </div>
                    </div>


            }
        </>

    );
}

Home.defaultProps = {
    api: `https://api.themoviedb.org/3/discover/movie?&api_key=04c35731a5ee918f014970082a0088b1&page=`,
}

export default Home;
