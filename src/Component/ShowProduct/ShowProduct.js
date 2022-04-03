import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ShowProduct = ({ product }) => {
    const { id, name, picture, price } = product
    const navigate = useNavigate()
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
            <button onClick={()=>navigate(`/details/${id}`)}>See Details</button>
            </div>
        </div>
    );
};

export default ShowProduct;