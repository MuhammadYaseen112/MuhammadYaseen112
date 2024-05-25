import './About.css';

import about_image from '../../assets/about.png';
import about_icon from '../../assets/play-icon.png';

const About = ()=>{
    return(
        <div className="about">
            <div className="about-left">
                <img src={about_image} alt="about-image" className='about-image' />
                <img src={about_icon} alt="about-icon" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nuturing tomorrow's Leader Today</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, sunt? Nam tempore inventore et facere incidunt optio iste error officiis alias dolores obcaecati, pariatur quo natus delectus corporis vero deserunt, a doloremque sed! Eaque, minus.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, sunt? Nam tempore inventore et facere incidunt optio iste error officiis alias dolores obcaecati, pariatur quo natus delectus corporis vero deserunt, a doloremque sed! Eaque, minus.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, sunt? Nam tempore inventore et facere incidunt optio iste error officiis alias dolores obcaecati, pariatur quo natus delectus corporis vero deserunt, a doloremque sed! Eaque, minus.</p>
            </div>
        </div>
    )
}

export default About