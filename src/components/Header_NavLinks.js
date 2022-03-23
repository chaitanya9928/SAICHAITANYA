import React from 'react';
import { Link } from 'react-router-dom';

//navlinks' title: Benefits Pricing About Blog Vantage Careers Quiz Webinar
//navlinks' link: /#benefits, /#pricing, /about, /blog, /vantage, /careers, /customer/#/quiz, /customer/#/webinar
// const navlinks = ['Benefits', 'Pricing', 'About', 'Blog', 'Vantage', 'Careers', 'Quiz', 'Webinar'];
//navlinks' external: false, false, false, false, false, false, true, true
const navlinks = [
    {
        title: 'Benefits',
        link: '/#benefits',
        external: false
    },
    {
        title: 'Pricing',
        link: '/#pricing',
        external: false
    },
    {
        title: 'About',
        link: '/about',
        external: false
    },
    {
        title: 'Blog',
        link: '/blog',
        external: false
    },
    {
        title: 'Vantage',
        link: '/vantage',
        external: false
    },
    {
        title: 'Careers',
        link: '/careers',
        external: false
    },
    {
        title: 'Quiz',
        link: '/customer/#/quiz',
        external: true
    },
    {
        title: 'Webinar',
        link: '/customer/#/webinar',
        external: true
    }
];
const NavLinks = () => {

    return (
        <div className='mh-navlinks-container'>
            {/* <Link to="/test">
                {
                    navlinks.map((navlink, index) => {
                        return (
                            <div key={index} className='mh-navlink'>
                                {navlink}
                            </div>
                        )
                    })
                }
            </Link> */}

            {
                navlinks.map((navlink, index) => {
                    // if external, use <a> tag
                    // else use <Link> tag
                    if (navlink.external) {
                        return (
                            <a key={index} href={navlink.link} className='mh-navlink'>
                                {navlink.title}
                            </a>
                        )
                    } else {
                        return (
                            <Link key={index} to={navlink.link} className='mh-navlink'>
                                {navlink.title}
                            </Link>
                        )
                    }
                })
            }
        </div>
    )
}

export default NavLinks;