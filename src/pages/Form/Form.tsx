import React, { useEffect, useState } from "react";
import { StepAccess, StepEmail } from "../../components/MultiStepForm/steps";
import { Logo, MainContainer } from "../../primitives";
import logo from "../../assets/logo.png";

const Form: React.FC = () => {
  const [step, setStep] = useState<"email" | "access">("email");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setStep("access");
    }
  }, []);

  return (
    <MainContainer>
      <Logo src={logo} alt="logo" />
      {step === "email" && <StepEmail onNext={() => setStep("access")} />}
      {step === "access" && <StepAccess />}
    </MainContainer>
  );
};

export default Form;
