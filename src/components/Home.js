import React from 'react'
import './styles/home.css'
import ArrowRightLine from './styles/assets/webfonts/ArrowRightLine'
import heroVideo from './styles/assets/videos/hero-video.mp4'

const Home = () => {
    return (
        <>
            <section className="home section" id='home'>
                <video className='video-bg' autoPlay muted loop>
                    <source src={heroVideo} type={'video/mp4'} />
                </video>
                <div className="container home-container">
                    <div className="home-data">
                        <h2 className="home-subtitle">GET YOUR BODY</h2>
                        <h1 className="home-title">IN SHAPE</h1>
                        <p className="home-description">In here, we will help you to shape and build your ideal body and live your life to its fullest.</p>
                        <button className='button button-flex'>Get Started <ArrowRightLine /></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home