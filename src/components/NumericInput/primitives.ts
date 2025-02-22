import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 300px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: none;
  padding: 10px 40px 10px 10px;
  text-align: center;
  outline: none;
  box-sizing: border-box;
`;

export const CurrencySymbol = styled.span`
  position: absolute;
  right: 10px;
  font-size: 16px;
  color: #000;
  pointer-events: none;
`;
