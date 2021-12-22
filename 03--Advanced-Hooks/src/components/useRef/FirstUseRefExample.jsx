import React, { Fragment, useRef } from "react";

const FirstUseRefExample = () => {
    const inputRef = useRef();
    const paraRef = useRef();
    const onSubmit = e => {
        e.preventDefault();
        // Input ref example
        inputRef.current.value = "Look at you";
        inputRef.current.style.backgroundColor = "red";
        inputRef.current.style.color = "#fff";

        // Paragraph Ref Example
        paraRef.current.innerText = "Goodbye !";
    };

    return (
        <Fragment>
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    ref={inputRef}
                    className="form-control mb-2"
                    id="name"
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <p ref={paraRef} onClick={() => inputRef.current.focus()}>
                    HELLO
                </p>
            </form>
        </Fragment>
    );
};

export default FirstUseRefExample;
