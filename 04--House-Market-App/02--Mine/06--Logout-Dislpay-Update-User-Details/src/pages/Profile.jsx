import { getAuth } from "firebase/auth";
import { Fragment, useEffect, useState } from "react";
import { updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "./../firebase.config";

const Profile = () => {
    const auth = getAuth();
    const [changeDetails, setChangeDetails] = useState(false);

    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    });

    const { name, email } = formData;

    const navigate = useNavigate();

    const onLogout = () => {
        auth.signOut();
        navigate("/");
    };

    const onChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = () => {
        console.log(123);
    };

    const conditionHandler = () => {
        changeDetails && onSubmit();
        setChangeDetails(!changeDetails);
    };

    return (
        <div className="profile">
            <header className="profileHeader">
                <p className="pageHeader">My Profile</p>
                <button type="button" className="logOut" onClick={onLogout}>
                    Logout
                </button>
            </header>

            <main>
                <div className="profileDEtailsHeader">
                    <p className="profileDetailsText">Personal Details</p>
                    <p
                        className="changePersonalDetails"
                        onClick={conditionHandler}
                    >
                        {changeDetails ? "done" : "change"}
                    </p>
                </div>
                <div className="profileCard">
                    <form action="">
                        <input
                            type="text"
                            id="name"
                            disabled={!changeDetails}
                            value={name}
                            onChange={onChange}
                            className={
                                !changeDetails
                                    ? "profileName"
                                    : "profileNameActive"
                            }
                        />
                    </form>
                </div>
            </main>
        </div>
    );
};
export default Profile;
