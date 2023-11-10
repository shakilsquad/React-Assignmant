import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../Context/MyProvider';

const DonationDetails = () => {
    // const id = useParams()
    const { cartData, setCartData } = useContext(MyContext)
    const { id, picture, title, category, description, price, category_bg_color, card_bg_color, text_button_bg_color, text_title_color } = cartData;

    console.log(cartData.title)
    return (
        <div className='container mx-auto py-8'>

            <div class="  card_bg_color border w-[800px]  border-gray-200 rounded-lg shadow">
                <div className='h-[500px] w-[800px] relative'>
                    <img class="rounded-t-lg w-full h-full" src={picture} alt="" />
                    <div className='bg-[#0B0B0B80] py-6 absolute mt-[-105px] w-full'>
                        <button className='bg-red-600 py-[16px] px-[26px] text-white font-bold'>Donate ${price}</button>
                    </div>
                </div>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>

                </div>
            </div>

        </div>
    );
};

export default DonationDetails;