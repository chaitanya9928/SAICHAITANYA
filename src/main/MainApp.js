import React from 'react';
import AppRouter from './AppRouter';
import StateHouse from './StateHouse';

const MainApp = () => {



    return (
        <>
            {/* <h1>Nothing is broken, yet.</h1> */}
            {/* <p style={{color: 'green', fontWeight: 'bold'}}>If you see this message then all is working fine.</p> */}
            <StateHouse /*props to pass to statehouse*/ >
                <AppRouter />
            </StateHouse>
        </>
        // app router and stuff
    )
}

export default MainApp;