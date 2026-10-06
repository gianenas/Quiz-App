import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="text-center max-w-md mx-auto py-4">
      <div className="inline-block px-4 py-1.5 rounded-full bg-palette-mint/10 border border-palette-mint/30 text-palette-mint text-xs font-semibold mb-4">
        Networking Basics
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-palette-light mb-4 tracking-tight leading-tight">
        Welcome to the <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-palette-lime to-palette-mint">
          Networking Quiz!
        </span>
      </h1>
      
      <p className="text-palette-light/70 mb-8 text-base">
        Test your knowledge on basic networking concepts, IP addresses, routers, and web protocols.
      </p>

      <button
        onClick={() => navigate('/quiz')}
        className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-palette-lime to-palette-mint text-palette-forest font-extrabold text-lg shadow-xl shadow-palette-lime/20 hover:brightness-105 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
      >
        Start Quiz
      </button>
    </div>
  );
}