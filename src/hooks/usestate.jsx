import React, { useState } from 'react';

let init = () => Math.floor(Math.random() * 100);

export default function UseState() {

    let [count, setCount] = useState(init);
    console.log('component rendered');
    console.log(count); // updated due to re-render

    const increment = () => {
        setCount(count+1);
        setCount(count+1); // this will not work because setCoutn is aync so callback should be used
        setCount(currval => currval+1); // this will work 
        setCount(currval => currval+1); // this will work
        setCount(currval => {
            return currval+1;
        })
        console.log(count); // not updated because re-render didnt occured
    }
    const decrement = () => {
        setCount(count-1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}