import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 18px;
  border: 1px solid white;
  border-radius: 5px;
  background: transparent;
  color: white;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #d4af37;
  }
`;

export const Suggestions = styled.ul`
  position: absolute;
  width: 100%;
  background: #222;
  color: white;
  list-style: none;
  margin: 5px 0 0 0;
  padding: 0;
  border-radius: 5px;
  border: 1px solid #444;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
`;

export const Suggestion = styled.li`
  padding: 12px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  border-bottom: 1px solid #444;

  &:hover {
    background: #333;
  }

  &:last-child {
    border-bottom: none;
  }
`;
