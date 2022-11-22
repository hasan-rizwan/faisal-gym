import React from 'react'
import './styles/footer.css'
import SvgHeartLine from './styles/assets/webfonts/HeartLine';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='footer'>
            <div>Copyright &#169; {date}. Faisal Gym All Rights Reserved</div>
            <div>MADE WITH <SvgHeartLine /> BY <a href={'https://www.linkedin.com/in/hasan-rizwan6/'} rel="noreferrer" target='_blank'>HASAN RIZWAN</a></div>
        </div>
    )
}

export default Footer