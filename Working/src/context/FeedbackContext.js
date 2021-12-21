import { createContext, useState, useEffect } from "react";

export const FeedbackContext = createContext({
    feedback: [],
    feedbackEdit: {},
    deleteFeedback: (id) => {},
    addFeedback: (item) => {},
    editFeedback: (item) => {},
    updateFeedback: (id, item) => {},
    isLoading: Boolean,
});
export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    const deleteFeedback = async (id) => {
        console.log("App", id);
        if (window.confirm("Are you sure you want to delete?")) {
            const updatedFeedback = feedback.filter((item) => item.id !== id);
            setFeedback(updatedFeedback);
        }
        await fetch(`feedback/${id}`, {
            method: "DELETE",
        });
    };

    const addFeedback = async (newFeedback) => {
        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFeedback),
        });
        const data = await response.json();
        setFeedback((prev) => [data, ...prev]);
    };

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updItem),
        });
        const data = await response.json();
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...data } : item
            )
        );
    };

    //  Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    useEffect(() => {
        console.log("USEFFECT");
        fetchFeedback();
    }, []);

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch("/feedback?_sort=id&_order=desc");
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                isLoading,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};
export default FeedbackContext;
