import React, { useState } from "react";
import { Wrapper, Input, Suggestions, Suggestion } from "./primitives";

interface AutoCompleteProps {
  options: string[];
  placeholder: string;
  onSelect: (value: string) => void;
  multiple?: boolean;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  options,
  placeholder,
  onSelect,
  multiple = false,
}) => {
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(filtered);
    setShowSuggestions(true);
  };

  const handleSelect = (value: string) => {
    if (multiple) {
      if (!selectedValues.includes(value)) {
        const newValues = [...selectedValues, value];
        setSelectedValues(newValues);
        onSelect(newValues.join(", "));
      }
    } else {
      setQuery(value);
      onSelect(value);
      setFilteredOptions([]);
      setShowSuggestions(false);
    }
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onClick={() => {
          setFilteredOptions(options);
          setShowSuggestions(true);
        }}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
      />
      {showSuggestions && filteredOptions.length > 0 && (
        <Suggestions>
          {filteredOptions.map((option, index) => (
            <Suggestion key={index} onClick={() => handleSelect(option)}>
              {option}
            </Suggestion>
          ))}
        </Suggestions>
      )}
    </Wrapper>
  );
};

export default AutoComplete;
