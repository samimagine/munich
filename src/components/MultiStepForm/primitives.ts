import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: white;
  font-family: "Arial", sans-serif;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const InputField = styled.input`
  width: 300px;
  padding: 12px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  outline: none;
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #121212;
  color: white;
  text-align: center;
`;

export const StepCounter = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  opacity: 0.8;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`;

export const AutoCompleteWrapper = styled.div`
  width: 300px;
`;
