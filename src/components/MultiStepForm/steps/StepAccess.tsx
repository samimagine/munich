import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Description, Button } from "./primitives";

const AccessStep: React.FC = () => {
  const navigate = useNavigate();

  const handleGo = () => {
    navigate("/form");
  };

  return (
    <Container>
      <Title>Discover your potential for non-dilutive fundraising</Title>
      <Description>
        Please answer the following 5 questions. We were not able to extract the
        required information from your domain at this point.
      </Description>
      <Button onClick={handleGo}>Go</Button>
    </Container>
  );
};

export default AccessStep;
