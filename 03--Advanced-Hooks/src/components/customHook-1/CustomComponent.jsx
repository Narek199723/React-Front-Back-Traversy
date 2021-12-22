import UseFetchExample from "./UseFetchExample";

const CustomComponent = () => {
    const { data, loading, error } = UseFetchExample(
        "https://jsonplaceholder.typicode.com/posts",
        {}
    );
    console.log(data);

    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <div>
            {data.map(post => (
                <h3 key={post.id}>{post.title}</h3>
            ))}
        </div>
    );
};

export default CustomComponent;
