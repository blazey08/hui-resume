// import Globe from './globe';
import { createScene } from './object'
import { useEffect } from 'react';



export function AnimationDiv() {
    useEffect(() => {
        createScene('animation-container');
    }, [])

    return (
        <div className='ml-auto bg-grey-300'>
            <div id='animation-container' className="w-64 h-64 border-1 border-white-300" />
            {/* <Globe /> */}
        </div>
    )
}