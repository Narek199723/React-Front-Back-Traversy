import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";

const UserResults = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        });
        const data = await res.json();
        setUsers(data);
        setIsLoading(false);
    };

    return !isLoading ? (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
            {users.map(user => (
                <h3>{user.login}</h3>
            ))}
        </div>
    ) : (
        <Spinner />
    );
};

export default UserResults;
