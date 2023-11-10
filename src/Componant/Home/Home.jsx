import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';


const Home = () => {
    const [carts, setCart] = useState([]);
    const [cartsdata, setCartData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data));
    }, [])
    return (

        <div >
            <div  className='bg-[#e6dada6f]'>
                <div className='w-[750px] m-auto pt-[60px] pb-[100px] items-center '>
                    <h1 className='text-5xl font-medium py-10'>I Grow By Helping People In Need</h1>
                    <div className="flex items-center justify-center">
                        <input className='  rounded-l-lg' type="search" name="search" id="" placeholder='Search here....' />
                        <button className='py-2 px-4 bg-[#FF444A]  rounded-r-lg text-white '>Search</button>
                    </div>
                </div>
            </div>

            <dir className="grid grid-cols-4 gap-5 container mx-auto py-8" >
                {
                    // carts.map(carts => <Cart key={carts.id} cart={carts} ></Cart>)
                    carts.map(cart => <Cart  key={cart.id} cart={cart}></Cart>)
                }
            </dir>
        </div>
    );
};

export default Home;