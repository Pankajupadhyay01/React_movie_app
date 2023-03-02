import React from 'react';
import { Link } from 'react-router-dom';
import Navtext from '../Data/Navtext';
import { useState } from 'react';
const Navbar = () => {
    const [open, setopen] = useState(false);
    const func = () => {
        setopen(!open)
        if (!open) {
            document.body.style.overflow = "hidden"
        }

        else {
            document.body.style.overflow = "auto";
        }
    }
    return (
        <div className='shadow-md m-0 p-0 box-border'>
            <nav className='w-full p-[11px_20px]  bg-gray-200 '>
                <div className="flex items-center align-middle justify-between m-[0_27px]">

                    <div className="text-2xl font-normal text-blue-400 flex">
                        <span className='text-gray-500'><ion-icon name="videocam"></ion-icon></span>
                        Movie
                    </div>

                    <div onClick={func} className='text-2xl cursor-pointer md:hidden ease-in-out'>
                        <ion-icon name={open ? "close" : "menu"}></ion-icon>
                    </div>

                    <div className={`list-none md:flex md:static absolute top-[53px] bg-gray-200 md:top-0 md:items-center 
                                    md:h-0 left-[0] h-[100vh] md:w-auto w-[70%] shadow-lg text-center z-[999] ${open ? "left-0" : "left-[-100%]"}`}>
                        {
                            Navtext.map(pro => (
                                <li key={pro.name} className='text-xl mx-9 hover:text-blue-400 mt-11 md:mt-0 '> <Link to={pro.link}>{pro.name}</Link>  </li>

                            ))
                        }

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;