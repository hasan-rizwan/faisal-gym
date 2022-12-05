import React from 'react'
import { Link } from 'react-router-dom'
import './styles/branches.css'

const Branches = () => {
    return (
        <section className="branches section" id='branches'>
            <div className="container">
                <div className="section-data">
                    <h2 className="section-subtitle">Branches</h2>
                    <div className="section-titles">
                        <h1 className="section-title-border">Get</h1>
                        <h1 className="section-title">Day, Time & Fee </h1>
                    </div>
                </div>
                <div className="branches-container grid">
                    <article className='branches-card branches-nazimabadBlk1'>
                        <div className="branches-data">
                            <h1 className="branches-title">Nazimabad Block 1</h1>
                            <Link to={'/branch/1'} className="branches-button">Find More</Link>
                        </div>
                    </article>
                    <article className='branches-card branches-nazimabadBlk5'>
                        <div className="branches-data">
                            <h1 className="branches-title">Nazimabad Block 5</h1>
                            <Link to={'/branch/2'} className="branches-button">Find More</Link>
                        </div>
                    </article>
                    <article className='branches-card branches-NorthKarachi'>
                        <div className="branches-data">
                            <h1 className="branches-title">North Karachi Sector 11-I</h1>
                            <Link to={'/branch/3'} className="branches-button">Find More</Link>
                        </div>
                    </article>
                    <article className='branches-card branches-gulzarEHijri'>
                        <div className="branches-data">
                            <h1 className="branches-title">Gulzar-e-Hijri Block 2</h1>
                            <Link to={'/branch/4'} className="branches-button">Find More</Link>
                        </div>
                    </article>
                    <article className='branches-card branches-asphani'>
                        <div className="branches-data">
                            <h1 className="branches-title">Abul Hasan Isphahani Rd</h1>
                            <Link to={'/branch/5'} className="branches-button">Find More</Link>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Branches