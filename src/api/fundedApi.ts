export const getBestFundingOptions = async (formData: any) => {
  const formattedData = {
    state: formData.state || "",
    company_size: formData.company_size || "",
    areas: Array.isArray(formData.areas) ? formData.areas : [],
    grant: Number(formData.grant) || 0,
    revenue: Number(formData.revenue) || 0,
  };

  console.log(
    "📤 Sending request to API:",
    JSON.stringify(formattedData, null, 2)
  );

  try {
    const response = await fetch("http://0.0.0.0:8000/find-best-funding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formattedData),
    });

    const responseData = await response.json();
    console.log("✅ API Response:", responseData);

    if (!response.ok) {
      console.error("🔴 API Error Response:", responseData);
      throw new Error(responseData.detail || "API Error");
    }

    return responseData;
  } catch (error) {
    console.error("❌ Fetch Error:", error);
    throw error;
  }
};
