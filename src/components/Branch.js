import React from 'react'
import './styles/branch.css'

const Branches = () => {
    return (
        <section className="branch section" id='branch'>
            <div className="container">
                <div className="section-data">
                    <h2 className="section-subtitle">Branches</h2>
                    <div className="section-titles">
                        <h1 className="section-title-border">Get</h1>
                        <h1 className="section-title">Date, Time, Pricing </h1>
                    </div>
                </div>
                <div className="branch-container grid">
                    <article className='branch-card branch-nazimabadBlk1'>
                        <div className="branch-data">
                            <h1 className="branch-title">Nazimabad Block 1</h1>
                            <button className="branch-button">Find More</button>
                        </div>
                    </article>
                    <article className='branch-card branch-nazimabadblk5'>
                        <div className="branch-data">
                            <h1 className="branch-title">Nazimabad Block 5</h1>
                            <button className="branch-button">Find More</button>
                        </div>
                    </article>
                    <article className='branch-card branch-NorthKarachi'>
                        <div className="branch-data">
                            <h1 className="branch-title">North Karachi Sector 11-I</h1>
                            <button className="branch-button">Find More</button>
                        </div>
                    </article>
                    <article className='branch-card branch-gulzarEHijri'>
                        <div className="branch-data">
                            <h1 className="branch-title">Gulzar-e-Hijri Block 2</h1>
                            <button className="branch-button">Find More</button>
                        </div>
                    </article>
                    <article className='branch-card branch-asphani'>
                        <div className="branch-data">
                            <h1 className="branch-title">Abul Hasan Isphahani Rd</h1>
                            <button className="branch-button">Find More</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Branches