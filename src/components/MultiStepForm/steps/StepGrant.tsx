import React from "react";
import { useFundedStore } from "../../../store/useFundedStore";
import { MAX_GRANT_VOLUME } from "../../../constants/formOptions";
import { Title, StepCounter } from "../primitives";
import NumericInput from "../../NumericInput/NumericInput";

interface StepGrantProps {
  onNext: () => void;
  onBack: () => void;
  onUpdate: (field: string, value: number) => void;
}

const StepGrant: React.FC<StepGrantProps> = ({ onNext, onBack, onUpdate }) => {
  const { grant, setFormData } = useFundedStore();

  const handleChange = (value: number) => {
    setFormData({ grant: value });
    onUpdate("grant", value);
  };

  return (
    <>
      <Title>Step 4: Enter Desired Grant Amount (€)</Title>
      <NumericInput
        value={grant || ""}
        onChange={handleChange}
        placeholder="Enter grant amount"
        max={MAX_GRANT_VOLUME}
      />
      <p>
        <strong>Max:</strong> {MAX_GRANT_VOLUME.toLocaleString()} euros
      </p>
      <StepCounter>Step 4 out of 5</StepCounter>
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepGrant;
