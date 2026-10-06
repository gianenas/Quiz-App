// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

export default function App() {
  const [results, setFinalResults] = useState({ score: 0, total: 10 });

  return (
    <BrowserRouter>
      {/* Centering wrapper: min-h-screen + flex + items-center + justify-center */}
      <div className="min-h-screen bg-[#13301c] text-palette-light flex items-center justify-center p-4 relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-palette-mint/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Main Quiz Card - Centered container with fixed max-width */}
        <div className="w-full max-w-xl bg-palette-forest/90 border border-palette-olive/50 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md relative z-10 mx-auto my-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage setFinalResults={setFinalResults} />} />
            <Route path="/results" element={<ResultPage results={results} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}