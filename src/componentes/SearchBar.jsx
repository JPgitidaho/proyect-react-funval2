import { useSearchLogic } from "../hoocks/useSearchLogic";

export default function SearchBar({ onSearch }) {
  const {
    input,
    suggestions,
    isFocused,
    setInput,
    setIsFocused,
    handleSubmit,
    handleSuggestionClick,
  } = useSearchLogic(onSearch);

  return (
    <div className="w-full flex flex-col items-center my-4 mr-8">
      <form
        onSubmit={handleSubmit}
        className="relative w-1/2 md:w-[510px] flex items-center"
      >
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-gray-100  border-gray-200 border-2 px-4 py-1.5 rounded-l-sm  shadow focus:outline-none"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className={`px-4 py-2 rounded-r-md transition-colors ${
            input.trim() ? "bg-[#1A202C]" : "bg-gray-300/30 "
          }`}
        >
          🔍
        </button>

        {suggestions.length > 0 && isFocused && (
          <ul className="absolute top-full left-0 w-full bg-gray-200 border border-gray-300 rounded shadow mt-1 z-10">
            {suggestions.map((sug, i) => (
              <li
                key={i}
                onMouseDown={() => handleSuggestionClick(sug)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {sug}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}
