import React from 'react';
import Logo from './Header_Logo';
import NavLinks from './Header_NavLinks';
import CallbackIcon from '../styles/assets/images/callback-icon.svg';
import UserIcon from '../styles/assets/images/user-icon.svg';

const Header = () => {
    
    return (
        <div className="main-header">

            <div className='mh-left'>
                <Logo />
                <NavLinks />
            </div>

            <div className='mh-right'>
                <a className='mh-navlink-bold'>
                    <img src={CallbackIcon} /> 
                    <p>
                        Request a call-back
                    </p>
                </a>
                <a className='mh-navlink-bold'>
                    <img src={UserIcon} /> 
                    <p>
                        Login
                    </p>
                </a>
                <a className='mh-navlink-action'>
                    Get Started
                </a>
            </div>

        </div>
    )
}

export default Header;