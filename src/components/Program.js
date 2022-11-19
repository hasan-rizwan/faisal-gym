import React from 'react'
import './styles/program.css'
import program1 from './styles/assets/images/program1.png'
import program2 from './styles/assets/images/program2.png'
import program3 from './styles/assets/images/program3.png'
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
                    <article className="program-article">
                        <div className="program-shape">
                            <FireLine />
                        </div>
                        <h3 className="program-title">Weight Loss</h3>
                    </article>

                    <article className="program-card">
                        <div className="program-shape">
                            <Yoga />
                        </div>
                        <h3 className="program-title">Basic Yoga</h3>
                    </article>

                    <article className="program-card">
                        <div className="program-shape">

                        </div>
                        <h3 className="program-title">Aerobics & Zumba</h3>
                    </article>

                    <article className="program-card">
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