export default function AnswerOption({ option, selected, onSelect }) {
  const isSelected = selected === option;

  return (
    <button
      onClick={() => onSelect(option)}
      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 font-medium ${
        isSelected
          ? 'border-palette-lime bg-palette-lime/10 text-palette-light shadow-lg shadow-palette-lime/10'
          : 'border-palette-olive/40 bg-[#173b22]/70 text-palette-light/90 hover:bg-palette-olive/30 hover:border-palette-olive/80'
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{option}</span>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          isSelected ? 'border-palette-lime bg-palette-lime' : 'border-palette-olive/60'
        }`}>
          {isSelected && <div className="w-2 h-2 rounded-full bg-palette-forest"></div>}
        </div>
      </div>
    </button>
  );
}