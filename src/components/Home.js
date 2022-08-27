import React from 'react'
import './styles/home.css'

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="max-width">
                    <div className="home-content">
                        <h2 className='text-1'>Faisal Gym</h2>
                        <h2 className='text-2'>Get in Shape</h2>
                        <div className="link-container">
                            <a href='https://google.com'>Login</a>
                            <a href='https://google.com'>Sign Up</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home