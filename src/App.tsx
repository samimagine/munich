import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/Form/Form";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import Panel from "./pages/Panel/Panel";
import MakingTheMagic from "./components/MultiStepForm/steps/StepMakingTheMagic";

const App: React.FC = () => {
  return (
    <Router basename="/munich">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form" element={<MultiStepForm />} />
        <Route path="/magic" element={<MakingTheMagic />} />
        <Route path="/results" element={<Panel />} />
      </Routes>
    </Router>
  );
};

export default App;
