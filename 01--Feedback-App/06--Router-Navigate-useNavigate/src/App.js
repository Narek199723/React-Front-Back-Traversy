import React, { Fragment, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from "react-router-dom";
import { v4 } from "uuid";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import Post from "./components/Post";
import Card from "./components/shared/Card";
import { feedbackData } from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";

const App = () => {
    const [feedback, setFeedback] = useState(feedbackData);

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
        <Router>
            <Header text="Feedback UI" />
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Fragment>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList
                                    feedback={feedback}
                                    handleDelete={deleteFeedback}
                                />
                            </Fragment>
                        }
                    />

                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/post/:id/:user/*" element={<Post />} />
                </Routes>
                <Card>
                    <NavLink to="/" activeclassname="active">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeclassname="active">
                        About
                    </NavLink>
                </Card>
                <AboutIconLink />
            </div>
        </Router>
    );
};

export default App;
