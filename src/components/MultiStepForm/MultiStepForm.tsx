import React, { useEffect, useState } from "react";
import { useFundedStore } from "../../store/useFundedStore";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  StepState,
  StepCompanySize,
  StepAreas,
  StepGrant,
  StepRevenue,
} from "./steps";
import { getBestFundingOptions } from "../../api/fundedApi";
import { FormContainer } from "./primitives";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const {
    setFormData,
    setFundingResults,
    state,
    company_size,
    areas,
    grant,
    revenue,
  } = useFundedStore();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const urlState = searchParams.get("state") || "";
    const urlCompanySize = searchParams.get("company_size") || "";
    const urlAreas = searchParams.get("areas")
      ? searchParams.get("areas")!.split(",")
      : [];
    const urlGrant = searchParams.get("grant")
      ? Number(searchParams.get("grant"))
      : 0;
    const urlRevenue = searchParams.get("revenue")
      ? Number(searchParams.get("revenue"))
      : 0;

    setFormData({
      state: urlState,
      company_size: urlCompanySize,
      areas: urlAreas,
      grant: urlGrant,
      revenue: urlRevenue,
    });
  }, []);

  const updateFormData = (field: string, value: any) => {
    setFormData({ [field]: value });

    const newParams = new URLSearchParams(searchParams);
    if (Array.isArray(value)) {
      newParams.set(field, value.join(","));
    } else {
      newParams.set(field, String(value));
    }
    setSearchParams(newParams);
  };

  const handleSubmit = async () => {
    console.log("📤 Submitting Zustand Data:", {
      state,
      company_size,
      areas,
      grant,
      revenue,
    });

    const formData = {
      state,
      company_size: company_size || "",
      areas: Array.isArray(areas) ? areas : [],
      grant: Number(grant) || 0,
      revenue: Number(revenue) || 0,
    };

    console.log("✅ Sending cleaned data:", formData);

    try {
      navigate("/magic");
      const results = await getBestFundingOptions(formData);
      setTimeout(() => {
        setFundingResults(results);
        navigate("/results");
      }, 2000);
    } catch (error) {
      console.error("🔴 Error fetching funding options:", error.message);
      setTimeout(() => {
        setFundingResults([]);
        navigate("/results");
      }, 2000);
    }
  };

  return (
    <FormContainer>
      {step === 1 && (
        <StepState onNext={() => setStep(2)} onUpdate={updateFormData} />
      )}
      {step === 2 && (
        <StepCompanySize
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
          onUpdate={updateFormData}
        />
      )}
      {step === 3 && (
        <StepAreas
          onNext={() => setStep(4)}
          onBack={() => setStep(2)}
          onUpdate={updateFormData}
        />
      )}
      {step === 4 && (
        <StepGrant
          onNext={() => setStep(5)}
          onBack={() => setStep(3)}
          onUpdate={updateFormData}
        />
      )}
      {step === 5 && (
        <StepRevenue
          onBack={() => setStep(4)}
          onUpdate={updateFormData}
          onSubmit={handleSubmit}
        />
      )}
    </FormContainer>
  );
};

export default MultiStepForm;
