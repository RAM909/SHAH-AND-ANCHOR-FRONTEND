import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AdminNavbar() {
    const [isHovered, setIsHovered] = useState(false);
    const { user } = useSelector((state) => state.user)

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <nav className="sticky z-50 top-0 bg-slate-500 text-xl">
            <div className="flex justify-start space-x-11 h-20">
                <div className="flex justify-center align-middle">
                    <button>
                        <Link to="/" className="text-2xl flex justify-center align-middle">
                            <img className='size-10' src="https://cdn-icons-png.flaticon.com/512/9752/9752709.png" alt="" />
                            Admin Panel
                        </Link>
                    </button>

                    <div className=' flex text-lg ml-14 space-x-10'>
                       
                        <button><Link to="/Table">Users</Link></button>
                        <button  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><Link to="">
                            <div className="relative  ">
                                <div>
                                    Sponsors
                                </div>
                              
                            </div>
                        </Link></button>

                    </div>
                </div>

                <div className="fixed flex flex-row justify-items-center items-center right-10 p-4 cursor-pointer">
                    <div className='flex items-center justify-center'>
                        <button>Logout</button>
                    </div>
                    <Link to='/account'>
                        <div className='flex justify-center items-center '>
                            <div className='mr-3'>{user ? user.username : "username"}</div>
                            <img className='h-8 mt-2' src="https://cdn-icons-png.flaticon.com/128/2609/2609282.png" alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;