import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../App';
import { addToDb } from '../../utilities/fakedb';
import ShowProduct from '../ShowProduct/ShowProduct';
import './Home.css'

const Home = () => {
    // const[products,setProducts]=useState([])
    const [products,setProducts]=useContext(productContext)
    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
       
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           {
               products.map(product => <ShowProduct
               key={product.id}
               product={product}
               />) 
            }
           </div>
        </>
    );
};

export default Home;