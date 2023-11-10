import React, { useContext, useState } from 'react';
import { MyContext } from '../../Context/MyProvider';
import ExtraCart from '../ExtraCart/ExtraCart';

const Donation = () => {
    const { addData, setAddData } = useContext(MyContext)
    console.log(addData)

    const [dataLength, setDataLength] = useState(4);
    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    addData.slice(0, dataLength).map(donationAdd => <ExtraCart key={donationAdd.id} donationAdd={donationAdd}></ExtraCart>)

                }
            </div>
            <div
            class='ml-[50%] '
                className={ dataLength === addData.length && 'hidden'}>
                <button
                    onClick={() => setDataLength(addData.length)}
                    className='py-2 px-4 bg-[#F87147] text-lg font-bold text-white rounded-lg'>Show All </button>
            </div>
        </div>
    );
};

export default Donation;