import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

const Profile = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth();
    useEffect(() => {
        setUser(auth.currentUser);
    }, [auth]);

    return user ? <h1>{user.displayName}</h1> : <h1>No User</h1>;
};

export default Profile;
