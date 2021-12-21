import spinner from "../asssets/christmas.gif";

const Spinner = () => {
    return (
        <img
            src={spinner}
            alt="Spinner"
            style={{
                width: "100px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
            }}
        />
    );
};

export default Spinner;
