import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.jpg'
import CustomLink from '../CustomLink/CustomLink';
import './Navber.css'

const Navber = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-img'>
                <img className='sm:' src={logo} alt="" />
            </div>
            <div className='nav-link'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/contuct'>Contuct</CustomLink>
            </div>
        </div>
    );
};

export default Navber;