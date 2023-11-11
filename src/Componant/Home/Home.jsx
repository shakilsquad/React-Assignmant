import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const [carts, setCart] = useState([]);
    const [value, searchValue] = useState ('');
    const [filterData, setFilterData] = useState ([]);
    // const [cartsdata, setCartData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data));
    }, [])

    useEffect(() => {
        console.log(filterData);
      }, [filterData]);

     const handelSearch = () => {
        let flt = carts.filter(itm => itm.category.toLowerCase().includes(value.toLowerCase()))
        setFilterData(flt)
        console.log(filterData);
    }
    return (

        <div >
            <Helmet>
                <title>Donation | Home</title>
            </Helmet>
            <div  className='bg-[#e6dada6f]'>
                <div className='
                m-auto w-[150px]  pt-[10px] md:w-[450px]  md:pt-[30px] lg:pb-[100px] lg:w-[750px]  lg:pt-[60px] pb-[10px] md:pb-[100px] items-center
                '>
                    <h1 className='text-xl md:text-3xl lg:text-5xl font-medium py-3 md:py-6 lg:py-10'>I Grow By Helping People In Need</h1>
                    <div className="flex items-center justify-center">

                        <input  onChange={(e) => searchValue(e.target.value)} className='  rounded-l-lg' type="search" name="search" id="" placeholder='Search here....' />
                        <button onClick={handelSearch}
                        className='py-2 px-4 bg-[#FF444A]  rounded-r-lg text-white '>Search</button>
                    </div>
                </div>
            </div>

            <dir className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto py-8" >
                {
                    value == "" ?   carts.map(cart => <Cart  key={cart.id} cart={cart}></Cart>) :  filterData.map(cart => <Cart  key={cart.id} cart={cart}></Cart>)
                }
                {
                    // carts.map(carts => <Cart key={carts.id} cart={carts} ></Cart>)


                }
            </dir>
        </div>
    );
};


export default Home;