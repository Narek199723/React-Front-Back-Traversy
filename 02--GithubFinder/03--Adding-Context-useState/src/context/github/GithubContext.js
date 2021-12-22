import { createContext, useState } from "react";

const GithubContext = createContext({});

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUsers = async () => {
        const res = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        const data = await res.json();
        setUsers(data);
        setIsLoading(false);
    };
    return (
        <GithubContext.Provider value={{ users, isLoading, fetchUsers }}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubContext;
