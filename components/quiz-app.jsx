"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  XCircle,
  Clock,
  Trophy,
  RotateCcw,
  ArrowRight,
  Brain,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample quiz data - in a real app, this would come from an API or database
const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  }
];

export default function QuizApp() {
  const [quizState, setQuizState] = useState("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [attemptCount, setAttemptCount] = useState(0);

  // Timer logic
  useEffect(() => {
    if (quizState !== "question" || isAnswerSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitAnswer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState, currentQuestion, isAnswerSubmitted]);

  // Reset timer when moving to next question
  useEffect(() => {
    if (quizState === "question") {
      setTimeLeft(30);
    }
  }, [currentQuestion, quizState]);

  const startQuiz = () => {
    setQuizState("question");
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setAttemptCount((prev) => prev + 1);
  };

  const handleAnswerSelect = (answer) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer && !isAnswerSubmitted) {
      // If time runs out and no answer selected
      setIsAnswerSubmitted(true);
      setAnswers((prev) => [
        ...prev,
        {
          question: currentQuestion,
          answer: "No answer",
          correct: false,
        },
      ]);
      return;
    }

    if (isAnswerSubmitted) return;

    const currentQuizQuestion = quizData[currentQuestion];
    const isCorrect = selectedAnswer === currentQuizQuestion.correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion,
        answer: selectedAnswer || "No answer",
        correct: isCorrect,
      },
    ]);

    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizState("result");
    }
  };

  const renderQuizStart = () => (
    <Card className="w-full p-5 max-w-md bg-gradient-to-b from-gray-900 to-gray-950 border-gray-800 shadow-xl">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto mb-4 bg-purple-600/30 p-4 rounded-full w-20 h-20 flex items-center justify-center">
          <Brain className="w-10 h-10 text-purple-400" />
        </div>
        <CardTitle className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Quiz Challenge
        </CardTitle>
        <CardDescription className="text-gray-300 mt-2">
          Test your knowledge with this {quizData.length}-question quiz
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        <div className="text-center text-gray-300 bg-gray-800/50 p-4 rounded-lg">
          <p className="mb-2">
            You'll have 30 seconds to answer each question.
          </p>
          <p>Try to get the highest score possible!</p>
        </div>
        {attemptCount > 0 && (
          <div className="text-center text-amber-300 bg-amber-900/20 p-3 rounded-lg border border-amber-800/30">
            <p>Previous attempts: {attemptCount}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          onClick={startQuiz}
          className="w-full flex justify-center items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-700/30"
        >
          Start Quiz
        </Button>
      </CardFooter>
    </Card>
  );

  const renderQuestion = () => {
    const question = quizData[currentQuestion];
    const progress = ((currentQuestion + 1) / quizData.length) * 100;

    return (
      <Card className="w-full p-5 max-w-md bg-gradient-to-b from-gray-900 to-gray-950 border-gray-800 shadow-xl">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full">
              Question {currentQuestion + 1}/{quizData.length}
            </span>
            <div className="flex items-center text-amber-300 bg-amber-900/20 px-3 py-1 rounded-full border border-amber-800/30">
              <Clock className="w-4 h-4 mr-1" />
              <span>{timeLeft}s</span>
            </div>
          </div>
          <Progress value={progress} className="h-2 bg-gray-800" />
          <CardTitle className="mt-4 text-xl text-white">
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="my-4">
          <RadioGroup
            value={selectedAnswer || ""}
            className="space-y-3"
            onValueChange={handleAnswerSelect}
          >
            {question.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrect =
                isAnswerSubmitted && option === question.correctAnswer;
              const isWrong =
                isAnswerSubmitted &&
                isSelected &&
                option !== question.correctAnswer;

              return (
                <div
                  key={option}
                  className={cn(
                    "flex items-center justify-center space-x-3 rounded-xl border p-4 cursor-pointer transition-all duration-300",
                    isAnswerSubmitted
                      ? "pointer-events-none"
                      : "hover:bg-gray-800/60 hover:border-gray-500 hover:scale-105",
                    isSelected &&
                      !isAnswerSubmitted &&
                      "border-purple-500 bg-purple-500/10 shadow-md",
                    isCorrect && "border-green-500 bg-green-500/10 shadow-md",
                    isWrong && "border-red-500 bg-red-500/10 shadow-md",
                    !isAnswerSubmitted && "border-gray-600"
                  )}
                  onClick={() => handleAnswerSelect(option)}
                >
                  <RadioGroupItem
                    value={option}
                    id={option}
                    className={cn(
                      "w-5 h-5",
                      isCorrect && "text-green-500 border-green-500",
                      isWrong && "text-red-500 border-red-500"
                    )}
                  />
                  <Label
                    htmlFor={option}
                    className={cn(
                      "flex-grow cursor-pointer text-white font-medium",
                      isCorrect && "text-green-400",
                      isWrong && "text-red-400"
                    )}
                  >
                    {option}
                  </Label>
                  {isAnswerSubmitted && (
                    <>
                      {isCorrect && (
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                      )}
                      {isWrong && <XCircle className="w-6 h-6 text-red-400" />}
                    </>
                  )}
                </div>
              );
            })}
          </RadioGroup>
        </CardContent>

        <CardFooter className="flex mt-5 justify-between items-center">
          {!isAnswerSubmitted ? (
            <Button
              onClick={handleSubmitAnswer}
              className="w-full flex justify-center items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-700/30"
              disabled={!selectedAnswer}
            >
              Submit Answer
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-700/30 flex items-center justify-center"
            >
              {currentQuestion < quizData.length - 1 ? (
                <>
                  Next Question <ArrowRight className="ml-2 w-4 h-4" />
                </>
              ) : (
                "See Results"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  };

  const renderResult = () => (
    <Card className="w-full p-5 max-w-md bg-gradient-to-b from-gray-900 to-gray-950 border-gray-800 shadow-xl">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-5 rounded-full w-24 h-24 flex items-center justify-center">
          <Trophy className="w-12 h-12 text-yellow-400" />
        </div>
        <CardTitle className="text-2xl font-bold text-white">
          Quiz Results
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg mt-2">
          You scored {score} out of {quizData.length}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center bg-gray-800/50 p-4 rounded-lg">
          <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            {Math.round((score / quizData.length) * 100)}%
          </p>
          <p className="text-gray-300 mt-2">
            {score === quizData.length
              ? "Perfect! You're a genius!"
              : score >= quizData.length * 0.7
              ? "Great job! You know your stuff!"
              : score >= quizData.length * 0.5
              ? "Not bad! Room for improvement."
              : "Keep practicing, you'll get better!"}
          </p>
        </div>

        <div className="space-y-3 mt-6">
          <h3 className="font-medium text-white text-lg mb-3">
            Question Summary:
          </h3>
          {answers.map((answer, index) => (
            <div
              key={index}
              className={cn(
                "p-4 rounded-lg text-white", // Made text white here
                answer.correct
                  ? "bg-green-500/10 border border-green-500/30"
                  : "bg-red-500/10 border border-red-500/30"
              )}
            >
              <p className="font-medium text-white">
                {quizData[answer.question].question}
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-between mt-2 gap-1">
                <span
                  className={answer.correct ? "text-green-400" : "text-red-400"}
                >
                  Your answer: {answer.answer}
                </span>
                {!answer.correct && (
                  <span className="text-green-400">
                    Correct: {quizData[answer.question].correctAnswer}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => setQuizState("start")}
          className="w-full mt-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-700/30 flex items-center justify-center"
        >
          <RotateCcw className="mr-2 w-5 h-5" /> Try Again
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="w-full max-w-md">
      {quizState === "start" && renderQuizStart()}
      {quizState === "question" && renderQuestion()}
      {quizState === "result" && renderResult()}
    </div>
  );
}
