import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// data
const questionsData  = [
  {
    question: "What temperature does water boil at?",
    optionA: "50 degrees Celcius",
    optionB: "25 degrees Celcius",
    optionC: "100 degrees Celcius",
    optionD: "150 degrees Celcius",
    answer: "100 degrees Celcius",
  },

  {
    question: "Who wrote Julius Caesar, Macbeth and Hamlet?",
    optionA: "Wole Soyinka",
    optionB: "William Shakespeare",
    optionC: "Ngozi Chimamanda Adichie",
    optionD: "Dan Brown",
    answer: "William Shakespeare",
  },

  {
    question: "What did the crocodile swallow in Peter Pan?",
    optionA: "A Book",
    optionB: "A Computer",
    optionC: "A pair of shoes",
    optionD: "Alarm Clock",
    answer: "Alarm Clock",
  },

  {
    question: "Which is the only mammal that can’t jump?",
    optionA: "Dog",
    optionB: "Elephant",
    optionC: "Goat",
    optionD: "Lion",
    answer: "Elephant",
  },

  {
    question: "Who lived at 221B, Baker Street, London?",
    optionA: "Tony Stark",
    optionB: "Morgan Freeman",
    optionC: "Sherlock Holmes",
    optionD: "Samuel L. Jackson",
    answer: "Sherlock Holmes",
  },

  {
    question: "What colour is a panda?",
    optionA: "Green and Yellow",
    optionB: "Blue and Red",
    optionC: "Green and White",
    optionD: "Black and White",
    answer: "Black and White",
  },

  {
    question: "Where is the smallest bone in the human body?",
    optionA: "The Chest",
    optionB: "The Ear",
    optionC: "The Legs",
    optionD: "The Hands",
    answer: "The Ear",
  },

  {
    question: "What does the roman numeral C represent?",
    optionA: "100",
    optionB: "10",
    optionC: "10,000",
    optionD: "1,000,000",
    answer: "100",
  },

  {
    question: "What takes place in Hong Kong's Happy Valley?",
    optionA: "Chicken Wrestling",
    optionB: "Horse racing",
    optionC: "Street Racing",
    optionD: "Arm Wrestling",
    answer: "Horse racing",
  },

  {
    question: "Who painted the Mona Lisa?",
    optionA: "Alexander Graham Bell",
    optionB: "Sir Isaac Newton",
    optionC: "Leonardo Da Vinci",
    optionD: "Albert Einstein",
    answer: "Leonardo Da Vinci",
  },

  {
    question: "What’s the most important book in the Moslem religion?",
    optionA: "The Koran",
    optionB: "The Dictionary",
    optionC: "The Bible",
    optionD: "The Chemistry text Book",
    answer: "The Koran",
  },

  {
    question: "What’s the capital of Ethiopia?",
    optionA: "Cape Town",
    optionB: "San Francisco",
    optionC: "Abuja",
    optionD: "Syndey",
    answer: "Addis Ababa",
  },

  {
    question: "How many squares are there on a chess board?",
    optionA: "128",
    optionB: "64",
    optionC: "32",
    optionD: "256",
    answer: "64",
  },

  {
    question: "Who invented the electric light bulb?",
    optionA: "Tom Cruise",
    optionB: "Barack Obama",
    optionC: "Wole Soyinka",
    optionD: "Thomas Edison",
    answer: "Thomas Edison",
  },

  {
    question: "What are the first three words of the bible?",
    optionA: "be with everyone",
    optionB: "Again Jesus asked",
    optionC: "In the beginning",
    optionD: "At that time",
    answer: "In the beginning",
  },
];

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attempts, setAttempts] = useState(0)
  const [score , setScore] = useState(0)
  const nave = useNavigate()
  // const history = useHistory()
  const currentQuestion = questionsData[currentQuestionIndex];

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, questionsData.length - 1));
  };
  const quitBtn = () => {
    alert("Are you really want to quit")
    // history.push("/result")
  }
  // for score
  const findingAns = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      console.log("correct");
      alert("Correct Answer")
      setScore(score + 1)
      goToNextQuestion()
    } else {
      alert("Wrong Answer")
      console.log("incorrect");
      setAttempts(attempts + 1)
      goToNextQuestion()
      console.log(attempts)
    }
  };
  return (
    <div>
      <div className="main-body-2">
        <center>
          <h1>Question</h1>
        </center>
        <p className="no">{currentQuestionIndex + 1} of 15</p>
        <center>
          <p className="question">
            <b>{currentQuestion.question}</b>
          </p>
          <div className="options">
            <div className="options-1">
            <button className="optionBtn" onClick={() => findingAns(currentQuestion.optionA)}>{currentQuestion.optionA}</button> &nbsp;&nbsp;
            <button className="optionBtn" onClick={() => findingAns(currentQuestion.optionB)}>{currentQuestion.optionB}</button>
            </div>
            <div className="options-2">
            <button className="optionBtn" onClick={() => findingAns(currentQuestion.optionC)}>{currentQuestion.optionC}</button> &nbsp;&nbsp;
            <button className="optionBtn" onClick={() => findingAns(currentQuestion.optionD)}>{currentQuestion.optionD}</button>
            </div>
            <div className="options-3">
              <button className="previousBtn" onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</button>&nbsp;
              <button className="nextBtn" onClick={goToNextQuestion} disabled={currentQuestionIndex === questionsData.length - 1}>Next</button>&nbsp;
              {/* <Link to={"/result"}><button className="quitName" onClick={quitBtn}>Quit</button></Link>&nbsp; */}
              {/* <Link to={"/result"}></Link> */}
              <button onClick={() => {nave("/result", { state:{
                score : score,
                attempts : currentQuestionIndex,
                wrong : attempts
              }

              })}}>Finish</button>
              {/* {nav("/result",{state:score})} */}
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default QuizComponent;


// onclicks for all the options
// 