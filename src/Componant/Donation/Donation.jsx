import React, { useContext } from 'react';
import { MyContext } from '../../Context/MyProvider';
import ExtraCart from '../ExtraCart/ExtraCart';

const Donation = () => {
    const { addData, setAddData } = useContext(MyContext)
    console.log(addData)
    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    addData.map(donationAdd => <ExtraCart key={donationAdd.id} donationAdd={donationAdd}></ExtraCart>)

                }
            </div>
            
        </div>
    );
};

export default Donation;