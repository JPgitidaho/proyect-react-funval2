

import { useState, useEffect } from "react";

export function useSearchLogic(onSearch) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!input.trim()) {
      setSuggestions([]);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?query=${input}&per_page=5&client_id=NOgMdBQZxEoB90QRNYiTFmfmghW3hQdA7SAorcS6Xvc`
        );
        const data = await res.json();
        if (!data.results || data.results.length === 0) {
          setSuggestions([]);
          return;
        }

        const filtered = data.results
          .map((img) => img.alt_description)
          .filter((desc) => desc?.toLowerCase().includes(input.toLowerCase()));

        if (filtered.length === 0) {
  
          setSuggestions([]);
        } else {
          setSuggestions(filtered.slice(0, 5));
        }
      } catch {
        setSuggestions([]);
      }
    };

    const delay = setTimeout(fetchData, 400);
    return () => clearTimeout(delay);
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim().toLowerCase());
    setInput("");
    setSuggestions([]);
  };

  const handleSuggestionClick = (sug) => {
    setInput("");
    setSuggestions([]);
    onSearch(sug);
  };

  return {
    input,
    suggestions,
    isFocused,
    setInput,
    setIsFocused,
    handleSubmit,
    handleSuggestionClick,
  };
}
