"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { data } from "@/components/constants/index";

const QuizTable = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = data.map((quiz) => {
        const marks = localStorage.getItem(`quiz_${quiz.id}_marks`);
        return {
          ...quiz,
          attempted: marks !== null,
          marks: marks ? `${marks}/100` : "Not Attempted",
        };
      });
      setQuizData(storedData);
    }
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4">Quiz List</h2>
      <table className="w-full text-white border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-3 px-4 text-left">Quiz Name</th>
            <th className="py-3 px-4 text-left">Link</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Marks</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((quiz) => (
              <tr
                key={quiz.id}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="py-3 px-4">{quiz.title}</td>
                <td className="py-3 px-4">
                  <Link
                    href={`/quiz/${quiz?.id}`}
                    className="text-blue-400 hover:underline"
                  >
                    Start Quiz
                  </Link>
                </td>
                <td className="py-3 px-4">
                  {quiz?.attempted ? (
                    <span className="text-green-400">Attempted</span>
                  ) : (
                    <span className="text-red-400">Not Attempted</span>
                  )}
                </td>
                <td className="py-3 px-4">{quiz?.marks}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-400">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default QuizTable;
