import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productContext } from '../../App';

const Details = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [products, setProducts] = useContext(productContext)

    const product = products.find(product => product.id === id)
    console.log(product)
    return (
        <div>
            <button className='text-sky-600 text-2xl font-bold' onClick={() => navigate('/')}>Back Home</button>
            <div>
                <img className='mx-auto' src={product.picture} alt="" />
            </div>
            <div className='text-center'>
                <p className='text-2xl'>{product.name}</p>
                <h1 className='text-2xl'>${product.price}</h1>
            </div>

        </div>
    );
};

export default Details;