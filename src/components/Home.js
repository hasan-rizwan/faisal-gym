import React from 'react'
import Navbar from './Navbar'
import './styles/home.css'

const Home = () => {
    return (
        <>
            <section className="home">
                <Navbar />
                <div className="max-width">
                    <div className="hero">
                        <h2 className='text-1'>Faisal Gym</h2>
                        <h2 className='text-2'>Get in Shape</h2>
                        <div className="link-container">
                            <a href='https://google.com'>Login</a>
                            <a href='https://google.com'>Sign Up</a>
                        </div>
                        <a href="#down" className='down-btn'>More</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home