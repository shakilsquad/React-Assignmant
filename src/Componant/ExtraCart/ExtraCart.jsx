import React from 'react';

const ExtraCart = ({ donationAdd }) => {

    const { id, picture, title, category, description, price, category_bg_color, card_bg_color, text_button_bg_color, text_title_color } = donationAdd;
    console.log(donationAdd)

    return (
        <div className='mt-10'>

            <div className='md:flex  gap-5 rounded-lg'
                style={{
                    background: `${card_bg_color}`
                }}
            >
                <div>
                    <img src={picture} alt="" />
                </div>
                <div className='p-3 space-y-3'>
                    <a
                        style={{
                            background: `${category_bg_color}`,
                            color: `${text_title_color}`
                        }}
                        href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {category}

                    </a>
                    <h5
                        style={{
                            color: `${text_title_color}`
                        }}
                        class=" mb-2 text-xl md:text-2xl font-bold tracking-tight">{title}</h5>
                    <p
                        style={{
                            color: `${text_title_color}`
                        }}
                        className='text-xl md:text-xl font-bold'>${price}</p>
                    <a
                        style={{
                            background: `${text_button_bg_color}`
                        }}
                        href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Details

                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExtraCart;