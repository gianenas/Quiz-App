import AnswerOption from './AnswerOption';

export default function QuestionCard({ questionData, selectedAnswer, onSelect, onNext, isLast }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl md:text-2xl font-semibold text-palette-light leading-relaxed">
        {questionData.question}
      </h2>

      <div className="flex flex-col gap-3">
        {questionData.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            selected={selectedAnswer}
            onSelect={onSelect}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!selectedAnswer}
        className="w-full py-4 px-6 mt-2 rounded-2xl bg-gradient-to-r from-palette-lime to-palette-mint text-palette-forest font-bold text-lg shadow-lg shadow-palette-lime/20 hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-[0.99]"
      >
        {isLast ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  );
}