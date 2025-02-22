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
  background: black;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-family: "Roboto Slab", sans-serif;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px 40px 10px 10px;
  text-align: center;
  outline: none;
  background: black;
  color: white;

  @media (max-width: 768px) {
    height: 35px;
  }
`;

export const CurrencySymbol = styled.span`
  position: absolute;
  right: 10px;
  font-size: 16px;
  color: white;
  pointer-events: none;
`;
