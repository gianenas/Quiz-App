import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';

export default function QuizPage({ setFinalResults }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    let updatedScore = score;
    if (selectedAnswer === currentQuestion.correctAnswer) {
      updatedScore += 1;
      setScore(updatedScore);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer('');
    } else {
      setFinalResults({ score: updatedScore, total: questions.length });
      navigate('/results');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <ProgressBar current={currentIndex} total={questions.length} />
      <QuestionCard
        questionData={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelect={setSelectedAnswer}
        onNext={handleNext}
        isLast={currentIndex === questions.length - 1}
      />
    </div>
  );
}