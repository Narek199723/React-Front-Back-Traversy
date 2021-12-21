import {
    useParams,
    Navigate,
    useNavigate,
    Routes,
    Route,
} from "react-router-dom";

const Post = () => {
    const params = useParams();
    const status = 404;
    const navigate = useNavigate();

    // if (status === 404) {
    //     return <Navigate to="/notfound" />;
    // }
    const onClick = () => {
        console.log("Hello");
        navigate("/about");
    };
    return (
        <div>
            <h1>POST {params.id}</h1>
            <h1>POST {params.user}</h1>
            <button onClick={onClick}>Click</button>
            <Routes>
                <Route path="/show" element={<h1>Hello Friend</h1>} />
            </Routes>
        </div>
    );
};

export default Post;
