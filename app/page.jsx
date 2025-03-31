import QuizApp from "@/components/quiz-app"
import QuizTable from "@/components/QuizTable"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-gray-100 flex items-center justify-center p-4">
      {/* <QuizApp /> */}
      <QuizTable />
    </main>
  )
}

