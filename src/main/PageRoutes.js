import React from 'react';
import { Route, Routes} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

const PageRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={ //sub route
                    <LandingPage />
                } />
            </Routes>
        </>
    )
}

export default PageRoutes;