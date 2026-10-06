import { useNavigate } from 'react-router-dom';
import ResultCard from '../components/ResultCard';

export default function ResultPage({ results }) {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md mx-auto">
      <ResultCard
        score={results.score}
        total={results.total}
        onRetake={() => navigate('/quiz')}
        onHome={() => navigate('/')}
      />
    </div>
  );
}