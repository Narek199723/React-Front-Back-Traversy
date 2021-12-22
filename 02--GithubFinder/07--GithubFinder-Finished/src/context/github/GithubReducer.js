const githubReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_USERS":
            return {
                ...state,
                users: payload,
                loading: false,
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            };
        case "CLEAR_USERS":
            return {
                ...state,
                users: [],
            };
        case "GET_USER_AND_REPOS":
            return {
                ...state,
                user: payload.user,
                repos: payload.repos,
                loading: false,
            };
        default:
            return state;
    }
};

export default githubReducer;
