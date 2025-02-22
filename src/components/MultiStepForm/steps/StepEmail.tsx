import React, { useState } from "react";
import {
  Container,
  Title,
  InputField,
  ErrorMessage,
  Button,
  Description,
} from "./primitives";

interface EmailStepProps {
  onNext: () => void;
}

const EmailStep: React.FC<EmailStepProps> = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    localStorage.setItem("userEmail", email);
    onNext();
  };

  return (
    <Container>
      <Title>Discover your potential for non-dilutive fundraising</Title>
      <InputField
        type="text"
        placeholder="Type your mail here"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Description>
        We use your mail to extract your domain. Based on your domain, our
        intelligent matching algorithm will provide you with a tailored
        non-dilutive fundraising roadmap.
      </Description>
      <Button onClick={handleSubmit}>Continue</Button>
    </Container>
  );
};

export default EmailStep;
