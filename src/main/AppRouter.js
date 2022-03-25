import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import PageRoutes from './PageRoutes';

const AppRouter = () => {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={ //main route
                        <div className='base-wrapper'>
                            <PageRoutes />
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
    )
}

export default AppRouter;