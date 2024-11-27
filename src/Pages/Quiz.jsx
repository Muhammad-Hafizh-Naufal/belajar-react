import { useState } from "react";
import { useParams } from "react-router-dom";
import categories from "../api/question.json";

const Quiz = () => {
  const { categoryName } = useParams();
  const category = categories.find((cat) => cat.name === categoryName);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  if (!category) {
    return <div>Materi tidak ditemukan</div>;
  }

  const questions = category.quiz;

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        {showScore ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Hasil Kuis
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Skor Anda: <span className="font-semibold">{score}</span> dari{" "}
              <span className="font-semibold">{questions.length}</span>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-lg text-gray-700 font-medium">
              {category.name}: {questions[currentQuestion].question}
            </h2>
            <div className="space-y-4 mt-4">
              {questions[currentQuestion].options.map((option) => (
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
