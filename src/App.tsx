import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import Results from "./pages/Results/Results";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultiStepForm />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;
