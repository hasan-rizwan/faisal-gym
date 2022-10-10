import React from 'react'
import './styles/program.css'
import program1 from './styles/assets/images/program1.png'
import program2 from './styles/assets/images/program2.png'
import program3 from './styles/assets/images/program3.png'
import ArrowRightLine from './styles/assets/webfonts/ArrowRightLine'

const Program = () => {
    return (
        <section className='program section' id='program'>
            <div className="container">
                <div className="section-data">
                    <h2 className="section-subtitle">Our Program</h2>
                    <div className="section-titles">
                        <h1 className="section-title-border">BUILD YOUR</h1>
                        <h1 className="section-title">DREAM BODY</h1>
                    </div>
                </div>
                <div className="program-container grid">
                    <article className="program-card">
                        <div className="program-shape">
                            <img src={program1} alt="program icon" className='program-img' />
                        </div>
                        <h3 className="program-title">Flex Muscle</h3>
                        <p className="program-description">Creating tension that's temporarily making the muscle fibers smaller or contracted.</p>
                        <a href="/" className='program-button'>
                            <ArrowRightLine color={'white'}/>
                        </a>
                    </article>

                    <article className="program-card">
                        <div className="program-shape">
                            <img src={program2} alt="program icon" className='program-img' />
                        </div>
                        <h3 className="program-title">Cardio Exercise</h3>
                        <p className="program-description">Exercise your heart rate up and keeps it up for a prolonged period of time.</p>
                        <a href="/" className='program-button'>
                            <ArrowRightLine color={'white'}/>
                        </a>
                    </article>

                    <article className="program-card">
                        <div className="program-shape">
                            <img src={program3} alt="program icon" className='program-img' />
                        </div>
                        <h3 className="program-title">Basic Yoga</h3>
                        <p className="program-description">Diaphragmatic this is the most common breathing technique you'll find in yoga.</p>
                        <a href="/" className='program-button'>
                            <ArrowRightLine color={'white'}/>
                        </a>
                    </article>
                    <article className="program-card">
                        <div className="program-shape">
                            <img src={program3} alt="program icon" className='program-img' />
                        </div>
                        <h3 className="program-title">Weight Lifting</h3>
                        <p className="program-description">Attempts a maximum weight single lift of a barbell loaded with weight plates.</p>
                        <a href="/" className='program-button'>
                            <ArrowRightLine color={'white'}/>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Program