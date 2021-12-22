import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext({
    users: [],
    loading: Boolean,
    setLoading: Boolean,
    searchUsers: text => {},
    clearUsers: () => {},
});

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Get Search Results
    const searchUsers = async text => {
        const params = new URLSearchParams({
            q: text,
        });
        setLoading();
        const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        const { items } = await res.json();
        dispatch({
            type: "GET_USERS",
            payload: items,
        });
    };

    //  Set Loading

    const setLoading = () => dispatch({ type: "SET_LOADING" });
    const clearUsers = () => dispatch({ type: "CLEAT_USERS" });
    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                searchUsers,
                setLoading,
                clearUsers,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};

export default GithubContext;
