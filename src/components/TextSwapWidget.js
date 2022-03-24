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
    const ref_scrollIndex = React.useRef(1);
    const showAll = false;
    const scrollDown = () => {
        //insert the text above the middle text
        insertText(pre, textList[ref_scrollIndex.current]);
        //decide next text to be shown
        ref_scrollIndex.current = (ref_scrollIndex.current + 1) % textList.length;
        setTimeout(() => {
            //make top pre div element slide to mid
            removeClass(pre, 0);
            addClass(mid, 0);
            //make mid div element slide to bottom (post)
            removeClass(mid, 1);
            addClass(post, 1);
            setTimeout(() => {
                cont.current.children[1].remove();
            }, 1000);
        }, 100);
    }

    useEffect(()=>{
        const a = setInterval(()=>{
            if(cont.current){
                if(cont.current.children.length === 1){
                    scrollDown();
                }else{
                    console.log(cont.current.children.length)
                }
            }else{
                console.log('clearing interval')
                clearInterval(a);
            }
        }, 2000);
    }, []);

    return (
        <div className='scrolltext-container'>
            <div className={tc} style={{marginRight: '0.3em'}}>
                {"Make"}
            </div>
            <div className='scrolltext-display' style={{overflowY: showAll?'visible':'hidden'}} ref={cont}>
                <div className={'scrolltext-mid '+tc}>
                    {textList[0]}
                </div>
            </div>
        </div>
    )
}

export default TextSwapWidget;