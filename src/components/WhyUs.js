import React from 'react'
import './styles/whyUs.css'

const WhyUs = () => {
    return (
        <>
            <section className="choose section">
                <div className="choose-overflow">
                    <div className="choose-container container grid">
                        <div className="choose-content">
                            <div className="section-data">
                                <h2 className="section-subtitle">Why Us?</h2>
                                <div className="section-titles">
                                    <h1 className="section-title-border">That's a</h1>
                                    <h1 className="section-title">Good Question</h1>
                                </div>
                            </div>
                            <p className="choose-description">
                                Choose your favourite class and start now. Remember, the only bad workout is the one you didn't do!
                            </p>
                            <div className="choose-data">
                                <div className="choose-group">
                                    <h3 className="choose-number">45+</h3>
                                    <p className="choose-subtitle">Total Members</p>
                                </div>
                                <div className="choose-group">
                                    <h3 className="choose-number">7+</h3>
                                    <p className="choose-subtitle">Total Trainers (female Included)</p>
                                </div>
                                <div className="choose-group">
                                    <h3 className="choose-number">5</h3>
                                    <p className="choose-subtitle">Branches In Karachi</p>
                                </div>
                                {/* <div className="choose-group">
                                    <h3 className="choose-number"></h3>
                                    <p className="choose-subtitle"></p>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs