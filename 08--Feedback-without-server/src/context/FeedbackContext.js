import { createContext, useState } from "react";
import { v4 } from "uuid";

export const FeedbackContext = createContext({
    feedback: [],
    feedbackEdit: {},
    deleteFeedback: (id) => {},
    addFeedback: (item) => {},
    editFeedback: (item) => {},
    updateFeedback: (id, item) => {},
});
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        { id: 1, text: "This is feedback item 1", rating: 9 },
        { id: 2, text: "This is feedback item 2", rating: 7 },
        { id: 3, text: "This is feedback item 3", rating: 5 },
        { id: 4, text: "This is feedback item 4", rating: 6 },
        { id: 5, text: "This is feedback item 5", rating: 8 },
        { id: 6, text: "This is feedback item 6", rating: 10 },
    ]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    const deleteFeedback = (id) => {
        console.log("App", id);
        if (window.confirm("Are you sure you want to delete?")) {
            const updatedFeedback = feedback.filter((item) => item.id !== id);
            setFeedback(updatedFeedback);
        }
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = v4();
        setFeedback((prev) => [newFeedback, ...prev]);
        console.log(feedback);
    };

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...updItem } : item
            )
        );
        console.log(id, updItem);
    };

    //  Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};
export default FeedbackContext;
