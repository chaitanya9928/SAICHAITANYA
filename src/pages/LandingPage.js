import React from 'react';
import TextSwapWidget from '../components/TextSwapWidget';
import HeroSectionImage from '../styles/assets/images/hero-section-image.png';

const textList = [
    'Smart Investments',
    'Customized Investments',
    'Automated Investments'
]

const LandingPage = () => {

    return (
        <div className='page-landing'>
           <div className='lp-hero'>
                <div className='lp-hero-main'>
                    <div className="lp-hero-left">
                        <div className='lp-hero-left-content'>
                            <TextSwapWidget textList={textList} textClass={"lp-hero-maintext"} />
                            <div className="lp-hero-subtext">
                                Build long-term wealth with our AI-based advisory services.
                            </div>
                            <button className="mh-navlink-action">Start investing </button>
                        </div>
                    </div>
                    <div className="lp-hero-right">
                        <img src={HeroSectionImage} />
                    </div>
                </div>
                <div className='lp-hero-footer'>
                    <div className='lp-hero-footer-content'>test</div>
                </div>
           </div>
        </div>
    )
}


export default LandingPage;