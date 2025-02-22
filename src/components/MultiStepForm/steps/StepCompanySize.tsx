import React from "react";
import AutoComplete from "../../AutoComplete/AutoComplete";
import { useFundedStore } from "../../../store/useFundedStore";
import { companySizes } from "../../../constants/formOptions";
import { Title, AutoCompleteWrapper, StepCounter } from "../primitives";
import { Button } from "./primitives";

interface StepCompanySizeProps {
  onNext: () => void;
  onBack: () => void;
  onUpdate: (field: string, value: string) => void;
}

const StepCompanySize: React.FC<StepCompanySizeProps> = ({
  onNext,
  onBack,
  onUpdate,
}) => {
  const { setFormData } = useFundedStore();

  const handleSelect = (value: string) => {
    setFormData({ company_size: value });
    onUpdate("company_size", value);
    onNext();
  };

  return (
    <>
      <Title>What is your company size?</Title>
      <AutoCompleteWrapper>
        <AutoComplete
          options={companySizes}
          placeholder="Select company size"
          onSelect={handleSelect}
        />
      </AutoCompleteWrapper>
      <StepCounter>Step 2 out of 5</StepCounter>
      <Button onClick={onBack}>Back</Button>
    </>
  );
};

export default StepCompanySize;
