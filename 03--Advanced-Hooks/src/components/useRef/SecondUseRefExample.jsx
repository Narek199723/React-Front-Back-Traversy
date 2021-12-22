import React, { useEffect, useRef, useState } from "react";

const SecondUseRefExample = () => {
    const renders = useRef(1);
    const [name, setName] = useState("");
    const prevName = useRef("");


    //  This is working because useEffect runs before the setName so when setName is 1 ref =1 and then after that setName is changed so that is how it works and how we can get the previous state
    useEffect(() => {
        renders.current += 1;
        prevName.current = name;
        console.log(1);
    }, [name]);
    
    return (
        <div>
            <h1>Renders: {renders.current} </h1>
            <h2>Prev Name State: {prevName.current} </h2>
            <input
                type="text"
                className="form-control mb-3"
                value={name}
                onChange={e => {
                    console.log(2);
                    setName(e.target.value);
                }}
            />
        </div>
    );
};

export default SecondUseRefExample;
