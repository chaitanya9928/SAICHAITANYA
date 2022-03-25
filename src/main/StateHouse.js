import React, { useEffect, useRef, useState } from 'react';
import GeneralContext from '../context/general';
import UserContext from '../context/user';
import { io } from 'socket.io-client';
import getWinText from '../misc/win_text';

const socket = io();
const StateHouse = ({children}) => {

    const userContextValue = false;
    // const generalContextValue = false;

    socket.emit('test', 'testbody');
    const [userCredit, setUserCredit] = React.useState(10);
    const [gameCredit, setGameCredit] = React.useState(0);
    const [gameRolls, setGameRolls] = React.useState(0);
    const [slotValues, setSlotValues] = React.useState([null, null, null]);


    useEffect(()=>{
        socket.emit('init');
        socket.on('init', x=> {
            console.log(x)
            setUserCredit(x.userCredit);
            setGameCredit(x.gameCredit);
        });
    }, [])

    const [rollAvailability, setRollAvailability] = React.useState(true);
    const rollTheSlots = () => {
        setRollAvailability(false);
        setScreenText('Rolling...');
        socket.emit('spin');
        socket.once('spin', x=> {
            if(x.error){
                setScreenText(x.error);
                setRollAvailability(true);
            } else {
                setUserCredit(x.userCredit);
                setGameRolls(x.gameRolls);
                setSlotValues([parseInt(x.result[0]), parseInt(x.result[1]), parseInt(x.result[2])]);
                winStatus.current = x.win;
            }
        });
    }
    const winStatus = useRef(null);
    const afterSpin = () => {
        if(winStatus.current){
            setScreenText(getWinText(winStatus.current));
            winStatus.current = null;
        }
        socket.emit('info');
        socket.once('info', x=> {
            console.log(x);
            setUserCredit(x.userCredit);
            setGameCredit(x.gameCredit);
            setGameRolls(x.gameRolls);
            setRollAvailability(true);
        });

    }

    
    const cashOut = () => {
        socket.emit('cashout');
        socket.once('cashout', x=> {
            if(x.error){
                setScreenText(x.error);
            }else{
                setUserCredit(x.userCredit);
                setGameCredit(x.gameCredit);
                setScreenText('Cashout successful!');
            }
        })
    }

    const [screenText, setScreenText] = React.useState('');
    const generalContextValue = {
        userCredit,
        gameCredit,
        slotValues,
        gameRolls,
        rollTheSlots,
        rollAvailability,
        afterSpin,
        screenText,
        setScreenText,
        cashOut
    };

    return (
        // provider and stufF? and children, and OverlayManager

        <>
            {/* statehouse. */}
            <UserContext.Provider value={false}>
                <GeneralContext.Provider value={generalContextValue}>
                    {children}
                </GeneralContext.Provider>
            </UserContext.Provider>
        </>
    )
}


export default StateHouse;