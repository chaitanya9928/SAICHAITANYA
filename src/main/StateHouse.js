import React from 'react';
import GeneralContext from '../context/general';
import UserContext from '../context/user';

const StateHouse = ({children}) => {

    const userContextValue = false;
    const generalContextValue = false;
    return (
        // provider and stufF? and children, and OverlayManager

        <>
            {/* statehouse. */}
            <UserContext.Provider value={false}>
                <GeneralContext.Provider value={false}>
                    {children}
                </GeneralContext.Provider>
            </UserContext.Provider>
        </>
    )
}


export default StateHouse;