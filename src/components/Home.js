import React from 'react'
import './styles/home.css'
import rightArrow from './styles/assets/webfonts/arrow-right-line.svg'

const Home = () => {
    return (
        <>
            <section className="home section">
                <div className="container home-container grid">
                    <div className="home-data">
                        <h2 className="home-subtitle">GET YOUR BODY</h2>
                        <h1 className="home-title">IN SHAPE</h1>
                        <p className="home-description">In here, we will help you to shape and build your ideal body and live your life to its fullest.</p>
                        <a href="#" className='button  button-flex'>Get Started <img src={rightArrow} alt="Right Arrow" /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home