import { useNavigate } from "react-router-dom"; // untuk menavigasi halaman
import categories from "../api/question.json"; // manggil data api/json

export default function CategoryList() {
  const navigate = useNavigate();

  const handleStartQuiz = (categoryName) => {
    navigate(`/quiz/${categoryName}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mt-8">Pilih Materi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-11/12">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-20 h-20 object-contain"
            />
            <h2 className="text-xl font-semibold text-gray-700 mt-4">
              {category.name}
            </h2>
            <p className="text-gray-500 text-center mt-2">
              {category.description}
            </p>
            <button
              onClick={() => handleStartQuiz(category.name)}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Mulai Kuis
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
