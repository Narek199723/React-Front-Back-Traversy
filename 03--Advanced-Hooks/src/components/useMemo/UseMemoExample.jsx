import { useEffect, useMemo, useRef, useState } from "react";

const UseMemoExample = () => {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);

  // We need to use useMemo because this won't cause expensive function call which means that let's say we have one very hard calculation fetch to make and we don't want it to do that calculation computation unnecessary we just need to pass useMemo and wrap everything in it, so it will do only once, 
    const sqrt = useMemo(() => getSqrt(number), [number]);
    // const sqrt = getSqrt(number);

    const renders = useRef(1);

    useEffect(() => {
        renders.current = renders.current + 1;
    });

    const onClick = () => setInc(prevState => prevState + 1);

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(e.target.value)}
                className="form-control w-25"
            />
            <h2 className="my-3">
                The sqrt of {number} is {sqrt}
            </h2>
            <button className="btn btn-primary" onClick={onClick}>
                Re Render
            </button>
            <h1>Renders: {renders.current}</h1>
        </div>
    );
};

function getSqrt(number) {
    for (let i = 0; i <= 10000; i++) {
        console.log(i);
    }

    console.log("Expensive function called");
    return Math.sqrt(number);
}

export default UseMemoExample;
