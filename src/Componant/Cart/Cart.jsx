import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/MyProvider';

const Cart = ({ cart }) => {
    const { cartData, setCartData } = useContext(MyContext)


    const { id, picture, title, category, description, price, category_bg_color, card_bg_color, text_button_bg_color, text_title_color } = cart;


    return (

        <Link to={`/donationDetails/${id}`}>
            <div style={{
                background: `${card_bg_color}`
            }} onClick={() => { setCartData(cart) }} >

                <div class="max-w-sm  border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <div>
                            <img class="rounded-t-lg w-full" src={picture} alt="" />
                        </div>

                    </a>

                    <div class="p-5">
                        <a
                            style={{
                                background: `${text_title_color}`
                            }}
                            href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {category}

                        </a>

                        <a href="#">

                            <h5
                                style={{
                                    color: `${text_title_color}`
                                }}
                                class=" mb-2 text-2xl font-bold tracking-tight">{title}</h5>
                        </a>
                        <p
                            style={{
                                color: `${text_title_color}`
                            }}
                            class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                        <p
                            style={{
                                color: `${text_title_color}`
                            }}
                            className='text-xl font-bold'>${price}</p>
                    </div>
                </div>

            </div>
        </Link>

    );
};

export default Cart;


// text-${text_title_color}