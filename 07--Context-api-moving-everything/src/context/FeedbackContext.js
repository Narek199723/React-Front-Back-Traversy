import { createContext, useState } from "react";
import { v4 } from "uuid";

export const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        { id: 1, text: "This is feedback item 1", rating: 9 },
        { id: 2, text: "This is feedback item 2", rating: 7 },
        { id: 3, text: "This is feedback item 3", rating: 5 },
        { id: 4, text: "This is feedback item 4", rating: 6 },
        { id: 5, text: "This is feedback item 5", rating: 8 },
        { id: 6, text: "This is feedback item 6", rating: 10 },
    ]);

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

    return (
        <FeedbackContext.Provider
            value={{ feedback, deleteFeedback, addFeedback }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};
export default FeedbackContext;
