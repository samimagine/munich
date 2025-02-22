import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Description, Loader } from "./primitives";

const MakingTheMagic: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      <Title>Discover your potential for non-dilutive fundraising</Title>
      <Loader />
      <Description>
        Based on your answers, our intelligent matching algorithm will provide
        you with a tailored non-dilutive fundraising roadmap.
      </Description>
    </Container>
  );
};

export default MakingTheMagic;
