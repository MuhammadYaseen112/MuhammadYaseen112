import './Navbar.css';
import logo from '../../assets/logo.png';
import React, { useEffect, useState } from 'react';

const Navbar = ()=>{

    const[sticky, setSticky] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 550 ? setSticky(true) : setSticky(false);
        })
    },[])
    

    return(
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
            <img src={logo} alt="logo" className='logo' />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Program</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Campus</a></li>
                <li><a href="#">Testinomials</a></li>
                <li><a href="#"><button className='btn'>Contact us</button></a></li>


                

            </ul>
        </nav>
    )
}

export default Navbar