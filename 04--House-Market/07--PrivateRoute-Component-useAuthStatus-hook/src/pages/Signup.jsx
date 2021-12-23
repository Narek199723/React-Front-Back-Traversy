import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { email, password, name } = formData;

    const navigate = useNavigate();

    const onChange = e => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const auth = getAuth();

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            updateProfile(auth.currentUser, { displayName: name });

            // Copying everything which is in our formData state
            const formatDataCopy = { ...formData };

            // Deleting password field from the object
            delete formatDataCopy.password;

            // Setting a timeStamp to an object which shows when it was created
            formatDataCopy.timestamp = serverTimestamp();

            // SetDoc is going to update the database and add our user to the users collection
            await setDoc(doc(db, "users", user.uid), formatDataCopy);

            navigate("/");
        } catch (error) {
            toast.error("Something went wrong with registration");
        }
    };

    return (
        <Fragment>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">Welcome Back!</p>
                </header>

                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        className="nameInput"
                        placeholder="Name"
                        id="name"
                        value={name}
                        onChange={onChange}
                    />
                    <input
                        type="email"
                        className="emailInput"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={onChange}
                    />

                    <div className="passwordInputDiv">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="passwordInput"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={onChange}
                        />

                        <img
                            src={visibilityIcon}
                            alt="show password"
                            className="showPassword"
                            onClick={() =>
                                setShowPassword(prevState => !prevState)
                            }
                        />
                    </div>

                    <Link to="/forgot-password" className="forgotPasswordLink">
                        Forgot Password
                    </Link>

                    <div className="signUpBar">
                        <p className="signUpText">Sign Up</p>
                        <button className="signUpButton">
                            <ArrowRightIcon
                                fill="#ffffff"
                                width="34px"
                                height="34px"
                            />
                        </button>
                    </div>
                </form>

                <Link to="/sign-in" className="registerLink">
                    Sign In Instead
                </Link>
            </div>
        </Fragment>
    );
};

export default Signup;
