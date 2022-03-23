import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import LandingPage from '../pages/LandingPage';

const PageRoutes = () => {

    return (
        <>
            {/* header */}
            <Header />
            <Routes>
                <Route path="/" element={ //sub route
                    <LandingPage />
                } />
            </Routes>
        </>
    )
}

export default PageRoutes;