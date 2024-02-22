import React from "react";
import { Link, useLocation } from "react-router-dom";

const ResultComponent = () => {
  const loc = useLocation();
  const data = loc.state.score;
  let attempted = loc.state.attempts;
  let wrong = loc.state.wrong
  if (attempted === 0) {
    attempted = 1; // If attempted is 0, set it to 1
  }
  const ans = data ? (data > 9 ? "0" + data : data) : 0;

  // Adjusted score calculation based on your data structure
  const totalQuestions = 15;
  const scorePercentage = Math.round((ans / totalQuestions) * 100);
  console.log("attempted " + attempted);
  console.log("data " + data);
  console.log("wrong" + wrong)
  return (
    <div>
      <center>
        <h1 className="result">Result</h1>
        <div className="main-body-3">
          <div>
            <h2>{scorePercentage >= 50 ? "Congratulations!" : "You need more practice!"}</h2>
            <h1 className="result-tag">Your score is {scorePercentage}%</h1>
          </div>
          <div className="flex">
            <p>Total number of questions</p>
            <p>{totalQuestions}</p>
          </div>
          <div className="flex">
            <p>Number of attempted questions</p>
            <p>{attempted}</p>
          </div>
          <div className="flex">
            <p>Number of correct answers</p>
            <p>{ans}</p>
          </div>
          <div className="flex">
            <p>Number of wrong answers</p>
            <p>{wrong}</p>
          </div>
        </div>
        <div className="flex-1">
          <Link to={"/quiz"}>
          <button className="playagain">Play Again</button></Link> &nbsp;
          <Link to={"/"}>
            <button className="back2home">Back to Home</button>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default ResultComponent;
