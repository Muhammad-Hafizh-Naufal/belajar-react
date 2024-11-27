
import { useState } from "react";
import questionsData from "../api/question.json";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    // Cek apakah jawaban benar
    if (selectedOption === questionsData[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Lanjut ke pertanyaan berikutnya
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        {showScore ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Hasil Kuis
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Skor Anda: <span className="font-semibold">{score}</span> dari{" "}
              <span className="font-semibold">{questionsData.length}</span>
            </p>
            <button
              onClick={restartQuiz}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Mulai Lagi
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-bold text-gray-800 mb-6">Kuis</h1>
            <div className="mb-6">
              <h2 className="text-lg text-gray-700 font-medium">
                Pertanyaan {currentQuestion + 1}/{questionsData.length}
              </h2>
              <p className="mt-2 text-gray-600">
                {questionsData[currentQuestion].question}
              </p>
            </div>
            <div className="space-y-4">
              {questionsData[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                  className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
