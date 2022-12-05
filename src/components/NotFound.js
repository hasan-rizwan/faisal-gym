import React from 'react'
import { Link } from 'react-router-dom'
import './styles/notFound.css'

const NotFound = () => {
    return (
        <div className='container notFound'>
            <h1 className='notFound-text-1'>404</h1>
            <h1 className='notFound-text-2'>Page Not Found!</h1>
            <Link to='/' className='notFound-text-1 notFound-button'>Go To Home</Link>
        </div>
    )
}

export default NotFound