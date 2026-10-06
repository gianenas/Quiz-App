export default function ResultCard({ score, total, onRetake, onHome }) {
  const percentage = Math.round((score / total) * 100);
  const incorrect = total - score;

  return (
    <div className="text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold text-palette-light mb-1">Quiz Completed!</h2>
      <p className="text-palette-mint/70 mb-6 text-sm">Here is your final score:</p>

      {/* Score Card */}
      <div className="w-full bg-[#163821] rounded-2xl p-6 border border-palette-olive/50 mb-6 shadow-inner">
        <span className="text-xs font-bold uppercase tracking-wider text-palette-mint">Your Score</span>
        <div className="text-5xl font-extrabold text-palette-lime my-3">
          {score} / {total}
        </div>
        <span className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-palette-mint/20 text-palette-mint border border-palette-mint/30">
          {percentage}% Accuracy
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 w-full mb-8">
        <div className="bg-palette-lime/10 border border-palette-lime/30 p-4 rounded-2xl">
          <p className="text-2xl font-bold text-palette-lime">{score}</p>
          <p className="text-xs text-palette-mint/80 uppercase font-medium mt-1">Correct</p>
        </div>
        <div className="bg-rose-950/40 border border-rose-800/40 p-4 rounded-2xl">
          <p className="text-2xl font-bold text-rose-400">{incorrect}</p>
          <p className="text-xs text-rose-300/80 uppercase font-medium mt-1">Incorrect</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <button
          onClick={onRetake}
          className="flex-1 py-3.5 px-5 rounded-xl bg-palette-lime text-palette-forest font-bold shadow-md hover:brightness-105 transition-all active:scale-95"
        >
          Retake Quiz
        </button>
        <button
          onClick={onHome}
          className="flex-1 py-3.5 px-5 rounded-xl bg-[#173b22] text-palette-mint border border-palette-olive/50 font-semibold hover:bg-palette-olive/40 transition-all active:scale-95"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}