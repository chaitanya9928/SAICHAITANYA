import React from 'react';
import TextSwapWidget from '../components/TextSwapWidget';

const textList = [
    'Smart Investments',
    'Customized Investments',
    'Automated Investments'
]

const LandingPage = () => {

    return (
        <div className='page-landing'>
           <div className='lp-hero'>
                <div className='lp-hero-content'>
                    <div className="lp-hero-left">
                        <TextSwapWidget textList={textList} textClass={"lp-hero-maintext"} />
                        <div className="lp-hero-subtext">
                            Build long-term wealth with our AI-based advisory services.
                        </div>
                        <button className="mh-navlink-action">Start investing </button>
                    </div>
                    <div className="lp-hero-right">

                    </div>
                </div>
                <div className='lp-hero-padding'>

                </div>
           </div>
        </div>
    )
}


export default LandingPage;