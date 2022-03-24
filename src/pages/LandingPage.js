import React, { useEffect } from 'react';
import TextSwapWidget from '../components/TextSwapWidget';
import HeroSectionImage from '../styles/assets/images/hero-section-image.png';
import Melon from '../styles/assets/images/gmelon.png';
import Banana from '../styles/assets/images/gbanana.png';
import Cherry from '../styles/assets/images/gcherry.png';
import Orange from '../styles/assets/images/gorange.png';
import Slot from '../components/Slot';

const LandingPage = () => {
    const footerText = "Added all required functionalities, didn't have much time to work on the UI, pretend this is an actual slot machine and you're good to go. Finished under 2 hours, learned TS for this thing.";



    const getScoreDisplay = (score) => {
        // should be 3 digits with leading zeros
        return score.toString().padStart(3, '0');
    }

    const [slotValues, setSlotValues] = React.useState([null, 1, 2]);

    useEffect(()=>{
        setInterval(()=>{
            setSlotValues(x=>{
                const getValue = (i) => {
                    // const value = Math.floor(Math.random() * 4);
                    // if (value === x[i]) {
                    //     return ((value+1) % 3);
                    // }else {
                    //     return value;
                    // }
                    return ((x[i]+1) % 3);
                }
                return ([
                    getValue(0),
                    getValue(1),
                    getValue(2)
                ]);
            });
        }, 100)
    }, [])

    const [slot1, setSlot1] = React.useState(null);
    const [slot2, setSlot2] = React.useState(null);
    const [slot3, setSlot3] = React.useState(null);

    const animateTo = (value, time, setSlot) => {
        // //roll the slot, stop each slot at a different time, value is the string (XXX) of the slot to stop at
        // value = '013';
        // const stopAt = value.split('').map(x=>parseInt(x));
        // const stopAtTime = [4000, 5000, 6000];
        // const stopAtIndex = stopAt.map(x=>slotValues.indexOf(x));


        // const stopAt = [1, 2, 3];

        // // setSlotValues randomly until one of the stop time

        const done = {value: false};
        const animateInterval = setInterval(()=>{
            if(done.value) {
                clearInterval(animateInterval);
                setSlot(value);
            } else {
                setSlot(x=>((x+1) % 3));
            }
        }, 100);
        setTimeout(()=>{
            // clearInterval(animateInterval);
            // setSlot(value);
            done.value = true;
        }, time);

    }

    const animateResult = (result) => {
        // result = '012';

        animateTo(result[0], 1500, setSlot1);
        animateTo(result[1], 2500, setSlot2);
        animateTo(result[2], 3500, setSlot3);
    }

    useEffect(()=>{
        // animateTo(3, 1500, setSlot1);
        // animateTo(2, 2500, setSlot2);
        // animateTo(1, 3500, setSlot3);
        animateResult('321');   
    }, []);
    
    return (
        <div className='demo-main-container'>
            Welcome to the slot machine.

            <div className='d-game-container'>
                <div className='d-game-screen'>
                    <div className='d-game-coin-counter'>
                        {getScoreDisplay(53)}
                    </div>
                    <div className='d-game-slots-row'>
                        <Slot value={slot1} />
                        <Slot value={slot2} />
                        <Slot value={slot3} />
                    </div>
                </div>
                <div className='d-game-button-row'>
                    <button className='d-game-b-cash'>Cash out</button>
                    <button className='d-game-b-spin'>Spin!</button>
                </div>
            </div>

            <div className='d-footer'>
                {footerText}
            </div>
        </div>
    )
}


export default LandingPage;