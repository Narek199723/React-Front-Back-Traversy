import { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";

const UserResults = () => {
    const { fetchUsers, isLoading, users } = useContext(GithubContext);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return !isLoading ? (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
            {users?.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    ) : (
        <Spinner />
    );
};

export default UserResults;
