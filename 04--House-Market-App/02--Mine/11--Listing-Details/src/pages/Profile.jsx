import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

    const onSubmit = async () => {
        try {
            if (auth.currentUser.displayName !== name) {
                // Update display name in firebase
                await updateProfile(auth.currentUser, {
                    displayName: name,
                });

                // Update in fireStore
                const userRef = doc(db, "users", auth.currentUser.uid);
                await updateDoc(userRef, {
                    name,
                });
            }
        } catch (error) {
            toast.error("Could not update profile details");
        }
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
                        <input
                            type="email"
                            id="email"
                            disabled={!changeDetails}
                            value={email}
                            onChange={onChange}
                            className={
                                !changeDetails
                                    ? "profileEmail"
                                    : "profileEmailActive"
                            }
                        />
                    </form>
                </div>
            </main>
        </div>
    );
};
export default Profile;