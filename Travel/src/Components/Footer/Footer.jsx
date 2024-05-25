import React ,{useEffect} from 'react';

import './Footer.css';

import { FiSend } from "react-icons/fi";

import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos';

import 'aos/dist/aos.css';








import video2 from '../../assets/sea.mp4'



const Footer = ()=>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">

                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up" className='btn flex' type='submit'>SEND <FiSend className='icon'/> </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className='icon'/>
                                Travel.
                            </a>
                        </div>
                        
                        <div data-aos="fade-up" className="footerParagraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores fugit pariatur dignissimos. Vero asperiores fugiat, porro dicta modi adipisci dolores, repellendus autem ipsa pariatur esse ex rerum soluta quam placeat?
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className='icon'/>
                            <AiFillYoutube  className='icon'/>
                            <AiFillInstagram  className='icon'/>
                            <FaTripadvisor  className='icon'/>
                        </div>
                    </div>
                    
                    <div className="footerlinks grid">
                        {/* Group One  */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">OUR AGENCY</span>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                Insurance
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                Agency
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                Tourism
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                Payment
                            </li>
                        </div>

                        {/* Group Two  */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">PARTNERS</span>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                Booking
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                RentCars
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                HostelWorld
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                Trivago
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                TripAdvisor
                            </li>
                        </div>

                        {/* Group Three  */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">LAST MINUTE</span>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                London
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                California
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                Pakistan
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                Europe
                            </li>

                            <li className="footeList flex">
                                <FiChevronRight className='icon'/>
                                New York
                            </li>
                        </div>
                    </div>


                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTs RESERVED - Mr.Yaseen | 2024</small>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Footer