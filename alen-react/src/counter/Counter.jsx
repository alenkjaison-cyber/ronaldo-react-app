import react, { usestate } from 'react';

const counter=() => {
    const [count, setcount]=usestate(0);

    const increase=()=>{
        setcount (count+1);
    };

    return(
        <>
        <h1>{count}</h1>
        <button onclick={increase}>count</button>
        </>
    );
};