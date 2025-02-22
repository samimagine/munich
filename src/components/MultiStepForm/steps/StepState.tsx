import React from "react";
import { useFundedStore } from "../../../store/useFundedStore";
import AutoComplete from "../../AutoComplete/AutoComplete";
import { states } from "../../../constants/formOptions";
import { Title, AutoCompleteWrapper, StepCounter } from "../primitives";

interface StepStateProps {
  onNext: () => void;
  onUpdate: (field: string, value: string) => void;
}

const StepState: React.FC<StepStateProps> = ({ onNext, onUpdate }) => {
  const { setFormData } = useFundedStore();

  const handleSelect = (value: string) => {
    setFormData({ state: value });
    onUpdate("state", value);
    onNext();
  };

  return (
    <>
      <Title>Step 1: Select Your Business State</Title>
      <AutoCompleteWrapper>
        <AutoComplete
          options={states}
          placeholder="Select a state"
          onSelect={handleSelect}
        />
      </AutoCompleteWrapper>
      <StepCounter>Step 1 out of 5</StepCounter>
    </>
  );
};

export default StepState;
