import React from 'react'
import './styles/program.css'
import FireLine from './styles/assets/webfonts/FireLine'
import Yoga from './styles/assets/webfonts/Yoga'
import Muscle from './styles/assets/webfonts/Muscle'

const Program = () => {
    return (
        <section className='program section' id='program'>
            <div className="container">
                <div className="section-data">
                    <h2 className="section-subtitle">Our Program</h2>
                    <div className="section-titles">
                        <h1 className="section-title-border">BUILD YOUR</h1>
                        <h1 className="section-title">BODY</h1>
                    </div>
                </div>
                <div className="program-container grid">
                    <article className="program-item">
                        <div className="program-shape">
                            <FireLine />
                        </div>
                        <h3 className="program-title">Weight Loss</h3>
                    </article>

                    <article className="program-item">
                        <div className="program-shape">
                            <Yoga />
                        </div>
                        <h3 className="program-title">Yoga & Aerobics</h3>
                    </article>
                    <article className="program-item">
                        <div className="program-shape">
                            <Muscle />
                        </div>
                        <h3 className="program-title">Personal Trainer</h3>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Program