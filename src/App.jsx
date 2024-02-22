import React from "react";
import HomeComponent from "./components/homeComponent";
import QuizComponent from "./components/quizComponent";
import ResultComponent from "./components/resultComponent";
import { Routes, Route } from "react-router-dom";
import "./App.css";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/result" element={<ResultComponent />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
