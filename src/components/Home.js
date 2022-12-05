import React from 'react'
import './styles/home.css'
import ArrowRightLine from './styles/assets/webfonts/ArrowRightLine'
import heroVideo from './styles/assets/videos/hero-video.mp4'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <>
            <section className="home section" id='home'>
                <video className='video-bg' autoPlay muted loop>
                    <source src={heroVideo} type={'video/mp4'} />
                </video>
                <div className="container home-container">
                    <div className="home-data">
                        <h2 className="home-subtitle">FAISAL GYM</h2>
                        <h1 className="home-title">GET IN SHAPE</h1>
                        <p className="home-description">In here, we will help you to shape and build your ideal body and live your life to its fullest.</p>
                        <div className="button-container">
                            <Link spy={true} smooth={true} offset={-100} duration={0} to='program' className='button button-flex'> Our Program <ArrowRightLine /></Link>
                            <Link spy={true} smooth={true} offset={-100} duration={0} to='branches' className='button-secondary button-flex'>Our Branches<ArrowRightLine /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero