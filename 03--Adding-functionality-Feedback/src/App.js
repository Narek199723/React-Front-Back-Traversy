import React, { Fragment, useState } from "react";
import { v4 } from "uuid";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { feedbackData } from "./data/FeedbackData";

const App = () => {
    const [feedback, setFeedback] = useState(feedbackData);

    console.log();

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
        <Fragment>
            <Header text="Feedback UI" />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                />
            </div>
        </Fragment>
    );
};

export default App;
