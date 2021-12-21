import React, { Fragment, useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { feedbackData } from "./data/FeedbackData";

const App = () => {
    const [feedback, setDFeedback] = useState(feedbackData);
    return (
        <Fragment>
            <Header text="Feedback UI" />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </Fragment>
    );
};

export default App;
