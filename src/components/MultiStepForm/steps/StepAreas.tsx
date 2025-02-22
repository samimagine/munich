import React from "react";
import AutoComplete from "../../AutoComplete/AutoComplete";
import { useFundedStore } from "../../../store/useFundedStore";
import { businessAreas } from "../../../constants/formOptions";
import { Title, AutoCompleteWrapper, StepCounter } from "../primitives";
import { Button } from "./primitives";

interface StepAreasProps {
  onNext: () => void;
  onBack: () => void;
  onUpdate: (field: string, value: string[]) => void;
}

const StepAreas: React.FC<StepAreasProps> = ({ onNext, onBack, onUpdate }) => {
  const { setFormData } = useFundedStore();

  const handleSelect = (value: string | string[]) => {
    const selectedAreas = Array.isArray(value)
      ? value.filter(Boolean)
      : value
      ? [value]
      : [];

    setFormData({ areas: selectedAreas });
    onUpdate("areas", selectedAreas);
    onNext();
  };

  return (
    <>
      <Title>In which areas are you active?</Title>
      <AutoCompleteWrapper>
        <AutoComplete
          options={businessAreas}
          placeholder="Select areas"
          onSelect={handleSelect}
          multiple
        />
      </AutoCompleteWrapper>
      <StepCounter>Step 3 out of 5</StepCounter>
      <Button onClick={onBack}>Back</Button>
    </>
  );
};

export default StepAreas;
