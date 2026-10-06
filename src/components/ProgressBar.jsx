export default function ProgressBar({ current, total }) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center mb-2 text-sm text-palette-mint/80 font-medium">
        <span>Question {current + 1} of {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-[#163821] h-3 rounded-full overflow-hidden p-0.5 border border-palette-olive/30">
        <div 
          className="bg-gradient-to-r from-palette-mint to-palette-lime h-full transition-all duration-300 ease-out rounded-full shadow-sm"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}