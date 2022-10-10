import React from 'react'
import './styles/pricing.css'
import pricing1 from './styles/assets/images/pricing1.png'
import pricing2 from './styles/assets/images/pricing2.png'
import pricing3 from './styles/assets/images/pricing3.png'
import CheckboxCircleLine from './styles/assets/webfonts/CheckboxCircleLine'
import ArrowRightLine from './styles/assets/webfonts/ArrowRightLine'

const Pricing = () => {
    return (
        <>
            <section className='pricing section' id='pricing'>
                <div className="container">
                    <div className="section-data">
                        <h2 className="section-subtitle">Pricing</h2>
                        <div className="section-titles">
                            <h1 className="section-title-border">Our</h1>
                            <h1 className="section-title">Plans</h1>
                        </div>
                    </div>
                    <div className="pricing-container grid">
                        <article className='pricing-card'>
                            <header className="pricing-header">
                                <div className="pricing-shape">
                                    <img src={pricing1} alt="pricing" className="pricing-img" />
                                </div>
                                <h1 className="pricing-title">1 Month</h1>
                                <h2 className="pricing-number">Rs1000</h2>
                            </header>
                            <ul className="pricing-list">
                                <li className="pricing-item">
                                    <CheckboxCircleLine /> <div>01 5 days a week</div>
                                </li>
                                <li className="pricing-item pricing-item-opacity">
                                    <CheckboxCircleLine /> <div>02 Bottle of Protein</div>
                                </li>
                                <li className="pricing-item pricing-item-opacity">
                                    <CheckboxCircleLine /> <div>03 Access to videos</div>
                                </li>
                                <li className="pricing-item pricing-item-opacity">
                                    <CheckboxCircleLine /> <div>04 Muscle Stretching</div>
                                </li>
                            </ul>
                            <button className="button button-flex pricing-button">
                                Subscribe Now <ArrowRightLine />
                            </button>
                        </article>
                        <article className='pricing-card pricing-card-active'>
                            <header className="pricing-header">
                                <div className="pricing-shape">
                                    <img src={pricing2} alt="pricing" className="pricing-img" />
                                </div>
                                <h1 className="pricing-title">6 Month</h1>
                                <h2 className="pricing-number">Rs6000</h2>
                            </header>
                            <ul className="pricing-list">
                                <li className="pricing-item">
                                    <CheckboxCircleLine fill={'#fff'} /> 01 5 days a week
                                </li>
                                <li className="pricing-item">
                                    <CheckboxCircleLine fill={'#fff'} /> 02 Bottle of Protein
                                </li>
                                <li className="pricing-item pricing-item-opacity">
                                    <CheckboxCircleLine fill={'#fff'} /> 03 Access to videos
                                </li>
                                <li className="pricing-item pricing-item-opacity">
                                    <CheckboxCircleLine fill={'#fff'} /> 04 Muscle Stretching
                                </li>
                            </ul>
                            <button className="button button-flex pricing-button">
                                Subscribe Now <ArrowRightLine />
                            </button>
                        </article>
                        <article className='pricing-card'>
                            <header className="pricing-header">
                                <div className="pricing-shape">
                                    <img src={pricing3} alt="pricing" className="pricing-img" />
                                </div>
                                <h1 className="pricing-title">12 Month</h1>
                                <h2 className="pricing-number">Rs12000</h2>
                            </header>
                            <ul className="pricing-list">
                                <li className="pricing-item">
                                    <CheckboxCircleLine /> 01 5 days a week
                                </li>
                                <li className="pricing-item">
                                    <CheckboxCircleLine /> 02 Bottle of Protein
                                </li>
                                <li className="pricing-item">
                                    <CheckboxCircleLine /> 03 Access to videos
                                </li>
                                <li className="pricing-item">
                                    <CheckboxCircleLine /> 04 Muscle Stretching
                                </li>
                            </ul>
                            <button className="button button-flex pricing-button">
                                Subscribe Now <ArrowRightLine />
                            </button>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing