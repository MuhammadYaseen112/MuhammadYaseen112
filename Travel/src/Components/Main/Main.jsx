// import icons 
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

// import Aos to animate things

import Aos from 'aos';

import 'aos/dist/aos.css';

// import css file
import './Main.css';

// import Image 
import img from '../../assets/image(1).jpg';
import img2 from '../../assets/image(2).jpg';
import img3 from '../../assets/image(6).jpg';
import img4 from '../../assets/image(4).jpg';
import img5 from '../../assets/image(5).jpg';
import img6 from '../../assets/image(3).jpg';

import React, { useEffect } from "react";

// Array Named Data

const data = [
    {
        id:1,
        imgSrc: img,
        destTitle:'Bora Bora',
        location:'New Zeeland',
        grade:'Cultural relax',
        fees:'$700',
        description: 'The epitome of romance, Bora Bora is one of the best Traveldestionation in the world. This place is known for its luxurious stays and  adventure activities.'
    },
    {
        id:2,
        imgSrc: img2,
        destTitle:'Bora Haji',
        location:'New York',
        grade:'Fectival relax',
        fees:'&800',
        description: 'The epitome of romance, Bora Bora is one of the best Traveldestionation in the world. This place is known for its luxurious stays and  adventure activities.'
    },
    {
        id:2,
        imgSrc: img3,
        destTitle:'Spain',
        location:'Spain',
        grade:'Fectival relax',
        fees:'&800',
        description: 'The epitome of romance, Bora Bora is one of the best Traveldestionation in the world. This place is known for its luxurious stays and  adventure activities.'
    },
    {
        id:2,
        imgSrc: img4,
        destTitle:'Burj Khalifa',
        location:'Dubai',
        grade:'Fectival relax',
        fees:'&800',
        description: 'The epitome of romance, Bora Bora is one of the best Traveldestionation in the world. This place is known for its luxurious stays and  adventure activities.'
    },
    {
        id:2,
        imgSrc: img5,
        destTitle:'British',
        location:'UK',
        grade:'Fectival relax',
        fees:'&800',
        description: 'The epitome of romance, Bora Bora is one of the best Traveldestionation in the world. This place is known for its luxurious stays and  adventure activities.'
    },
    {
        id:2,
        imgSrc: img6,
        destTitle:'Paramids',
        location:'Egypt',
        grade:'Fectival relax',
        fees:'&800',
        description: 'The epitome of romance, Bora Bora is one of the best Traveldestionation in the world. This place is known for its luxurious stays and  adventure activities.'
    },
    // {
    //     id:2,
    //     imgSrc: img7,
    //     destTitle:'Blue Masjid',
    //     location:'Turkey',
    //     grade:'Fectival relax',
    //     fees:'&800',
    //     description: 'The epitome of romance, Bora Bora is one of the best Traveldestionation in the world. This place is known for its luxurious stays and  adventure activities.'
    // },
    // {
    //     id:2,
    //     imgSrc: img8,
    //     destTitle:'Bora Haji',
    //     location:'London',
    //     grade:'Fectival relax',
    //     fees:'&800',
    //     description: 'The epitome of romance, Bora Bora is one of the best Traveldestionation in the world. This place is known for its luxurious stays and  adventure activities.'
    // }
]


const Main = ()=>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                        return(
                            <div data-aos="fade-up" key={id} className='singleDestination'>
                                
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Main