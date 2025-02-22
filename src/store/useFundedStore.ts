import { create } from "zustand";

interface FundingStore {
  state: string;
  company_size: string;
  areas: string[];
  grant: number;
  revenue: number;
  fundingResults: any[];

  setFormData: (data: Partial<FundingStore>) => void;
  setFundingResults: (results: any[]) => void;
}

export const useFundedStore = create<FundingStore>((set) => ({
  state: "",
  company_size: "",
  areas: [],
  grant: 0,
  revenue: 0,
  fundingResults: [],

  setFormData: (data) => {
    console.log("Updating Zustand:", data);
    set((state) => ({
      ...state,
      ...data,
      areas: data.areas ? data.areas.filter(Boolean) : state.areas,
    }));
  },
  setFundingResults: (results) => set({ fundingResults: results }),
}));
