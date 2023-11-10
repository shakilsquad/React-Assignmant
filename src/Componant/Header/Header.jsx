import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="py-5 bg-[#e6dada6f]  ">
            <div className='container mx-auto flex  justify-between items-center '>
                <div>
                    <img src="/public/Logo.png" alt="" />
                </div>
                <div>
                    <ul className='flex justify-between items-center gap-8 '>
                        <li className='text-xl font-medium'>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                isPending ? "pending"  : isActive ? "active text-[#FF444A] border-b-2 border-[#FF444A]" : "text-black"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='text-xl font-medium' >
                            <NavLink
                                to={'/donation'}
                                className={({ isActive, isPending }) =>
                                isPending ? "pending"  : isActive ? "active text-[#FF444A] border-b-2 border-[#FF444A]" : "text-black"
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li className='text-xl font-medium' >
                            <NavLink
                                to={'/statistics'}
                                className={({ isActive, isPending }) =>
                                isPending ? "pending"  : isActive ? "active text-[#FF444A] border-b-2 border-[#FF444A]" : "text-black"
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
            {/* <div className='w-[750px] m-auto pt-[60px] pb-[100px] items-center '>
                <h1 className='text-5xl font-medium py-10'>I Grow By Helping People In Need</h1>
                <div className="flex items-center justify-center">
                    <input className='  rounded-l-lg' type="search" name="search" id="" placeholder='Search here....' />
                    <button className='py-2 px-4 bg-[#FF444A]  rounded-r-lg text-white '>Search</button>
                </div>
            </div> */}


        </div>
    );
};

export default Header;