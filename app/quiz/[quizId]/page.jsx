"use client";
import { useParams } from "next/navigation";
import QuizApp from "@/components/quiz-app";
import { data } from "@/components/constants/index";

export default function QuizPage() {
  const { quizId } = useParams();
  console.log("Quiz ID:", quizId);

  const filterData = data.filter((quiz) => quiz.id === quizId);
  console.log(filterData);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-gray-100 flex items-center justify-center p-4">
      <QuizApp quizData={filterData[0]?.questions} />
    </main>
  );
}
