import { useEffect, useState } from "react";

const UseFetchExample = (url, options) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {
        data,
        loading,
        error,
    };
};

export default UseFetchExample;
