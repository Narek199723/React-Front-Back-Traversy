import React, { Fragment, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { feedbackData } from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";

const App = () => {
    return (
        <Router>
            <Header text="Feedback UI" />
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Fragment>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </Fragment>
                        }
                    />

                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    );
};

export default App;
