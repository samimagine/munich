export const getBestFundingOptions = async (formData: any) => {
  const formattedData = {
    state: formData.state || "",
    company_size: formData.company_size || "",
    areas: Array.isArray(formData.areas) ? formData.areas : [],
    grant: Number(formData.grant) || 0,
    revenue: Number(formData.revenue) || 0,
  };

  return fetch("https://bayern.onrender.com/find-best-funding", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formattedData),
  })
    .then((response) => {
      if (!response.ok) return [];
      return response.json();
    })
    .catch(() => []);
};
