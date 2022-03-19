import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TestPage from '../pages/TestPage';

const AppRouter = () => {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={ //main route
                        <div className='base-wrapper'>
                            <Routes>
                                <Route path="/" element={ //sub route
                                    <TestPage />
                                } />
                            </Routes>
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
    )
}

export default AppRouter;