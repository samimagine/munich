import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #111;
  color: white;
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  max-width: 500px;
  margin-bottom: 30px;
  color: #ddd;
`;

export const InputField = styled.input`
  width: 320px;
  height: 50px;
  padding: 12px;
  font-size: 18px;
  border: 1px solid white;
  border-radius: 5px;
  outline: none;
  text-align: center;
  background: black;
  color: white;

  @media (max-width: 768px) {
    height: 35px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 8px;
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  background-color: white;
  color: black;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: gray;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 20px 0;
`;
