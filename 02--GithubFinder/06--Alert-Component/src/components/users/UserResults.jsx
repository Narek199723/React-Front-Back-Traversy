import { useContext } from "react";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";

const UserResults = () => {
    const { isLoading, users } = useContext(GithubContext);

    console.log(users);
    return !isLoading ? (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    ) : (
        <Spinner />
    );
};

export default UserResults;
