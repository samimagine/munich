import React from "react";
import { useFundedStore } from "../../../store/useFundedStore";
import { Title, StepCounter, ButtonContainer, Button } from "../primitives";
import NumericInput from "../../NumericInput/NumericInput";

interface StepRevenueProps {
  onBack: () => void;
  onSubmit: () => void;
  onUpdate: (field: string, value: number) => void;
}

const StepRevenue: React.FC<StepRevenueProps> = ({
  onBack,
  onSubmit,
  onUpdate,
}) => {
  const { revenue, setFormData } = useFundedStore();

  const handleChange = (value: number) => {
    setFormData({ revenue: value });
    onUpdate("revenue", value);
  };

  return (
    <>
      <Title>What is your monthly revenue?</Title>
      <NumericInput
        value={revenue || ""}
        onChange={handleChange}
        placeholder="Enter monthly revenue"
      />
      <StepCounter>Step 5 out of 5</StepCounter>
      <ButtonContainer>
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onSubmit}>Submit</Button>
      </ButtonContainer>
    </>
  );
};

export default StepRevenue;
