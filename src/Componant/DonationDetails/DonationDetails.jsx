import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../Context/MyProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
    // const id = useParams()
    const { cartData, setCartData } = useContext(MyContext)
    const { id, picture, title, category, description, price, category_bg_color, card_bg_color, text_button_bg_color, text_title_color } = cartData;

    console.log(cartData.title)
    const handelDonationAdd = () =>{
        
        toast('You Have Donate successful')
    }

    return (
        <div className='container mx-auto py-8'>

            <div class="  card_bg_color border  w-[200px]  md:w-[400px]  lg:w-[800px]  border-gray-200 rounded-lg shadow">
                <div className='h-[100px] w-[300px] md:h-[250px] md:w-[400px] lg:h-[500px] lg:w-[800px] relative'>
                    <img class="rounded-t-lg lg:w-full lg:h-full" src={picture} alt="" />
                    <div className='bg-[#0B0B0B80] lg:py-6 absolute lg:mt-[-105px] w-full'>
                        <button
                        onClick={handelDonationAdd}
                        style={{
                            background: `${category_bg_color}`
                        }}
                        className=' lg:py-[16px] lg:px-[26px] rounded-lg lg:ml-9 text-white font-bold'>Donate ${price}</button>
                    </div>
                </div>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>

                </div>
                <ToastContainer />
            </div>

        </div>
    );
};

export default DonationDetails;