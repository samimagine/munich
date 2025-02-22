import React, { useState } from "react";
import {
  InputWrapper,
  StyledInput,
  InputContainer,
  CurrencySymbol,
} from "./primitives";

interface NumericInputProps {
  value: number | string;
  onChange: (value: number) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  max?: number;
}

const formatNumber = (num: number | string) => {
  if (!num) return "";
  return new Intl.NumberFormat("de-DE").format(Number(num));
};

const NumericInput: React.FC<NumericInputProps> = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
  max,
}) => {
  const [internalValue, setInternalValue] = useState(
    value ? formatNumber(value) : ""
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    const num = numericValue ? Number(numericValue) : 0;

    if (!isNaN(num) && (!max || num <= max)) {
      setInternalValue(formatNumber(num));
      onChange(num);
    }
  };

  return (
    <InputWrapper>
      <InputContainer>
        <StyledInput
          type="text"
          inputMode="numeric"
          value={internalValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
        />
        <CurrencySymbol>€</CurrencySymbol>
      </InputContainer>
    </InputWrapper>
  );
};

export default NumericInput;
