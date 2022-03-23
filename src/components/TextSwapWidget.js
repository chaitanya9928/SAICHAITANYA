import React, { useEffect, useRef } from 'react';


const textList = [
    'epic',
    'awesome',
    'amazing',
    'fantastic',
    'incredible',
    'wonderful',
    'great',
    'cool',
    'beautiful',
    'marvelous',
    'magnificent',
    'stunning',
    'spectacular',
    'wondrous'
]
const TextSwapWidget = ({textClass:tc, textList}) => {

    const cont = useRef(null);
    
    const pre = 'scrolltext-pre';
    const mid = 'scrolltext-mid';
    const post = 'scrolltext-post';
    const removeClass = (cls, index) => {
        cont.current.children[index].classList.remove(cls);
    }
    const addClass = (cls, index) => {
        cont.current.children[index].classList.add(cls);
    }

    const insertText = (cls, text) => {
        const a = document.createElement('div');
        a.innerHTML = text;
        a.classList.add(cls);
        a.classList.add(tc);
        cont.current.prepend(a);
    }
    const [scrollTextValue, setScrollTextValue] = React.useState(0);
    const ref_scrollIndex = React.useRef(1);
    const showAll = false;
    const scrollDown = () => {
        // insertText(pre, 'Smart Investments PRE')
        insertText(pre, textList[ref_scrollIndex.current]);
        setScrollTextValue(scrollTextValue + 1);
        ref_scrollIndex.current = (ref_scrollIndex.current + 1) % textList.length;
        setTimeout(() => {
            removeClass(pre, 0);
            addClass(mid, 0);
            removeClass(mid, 1);
            addClass(post, 1);
        }, 100);
    }

    useEffect(()=>{
        setInterval(()=>{
            // cont.current.children[0].classList.remove('scrolltext-pre');
            // cont.current.children[0].classList.add('scrolltext-mid');
            scrollDown();
        }, 2000);
    }, []);

    return (
        <div className='scroll-text-container'>
            <div className={tc} style={{marginRight: '0.3em'}}>
                {"Make"}
            </div>
            <div className='scrolltext-display' style={{overflowY: showAll?'visible':'hidden'}} ref={cont}>
                {/* <div className={'scrolltext-pre '+tc}>
                    Smart Investments PRE
                </div> */}
                <div className={'scrolltext-mid '+tc}>
                    {textList[0]}
                </div>
                {/* <div className={'scrolltext-post '+tc}>
                    Smart Investments POST
                </div> */}
            </div>
        </div>
    )
}

export default TextSwapWidget;