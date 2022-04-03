import React from 'react';

const ShowProduct = ({ product }) => {
    const { id, name, picture, price } = product
    return (
        <div>
            <div>
                <img src={picture} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p>Price:${price}</p>
            </div>
            <div className='text-center bg-gray-400 rounded-lg p-2 text-lg font-bold hover:text-lime-600'>
            <button>See Details</button>
            </div>
        </div>
    );
};

export default ShowProduct;