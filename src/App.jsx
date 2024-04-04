import React from "react";
import "./App.css";
import Stepper from "./StepComponent/Stepper";
const App = () => {
  // setup step validators, will be called before proceeding to the next step
  const [currentStep, setCurrentStep] = React.useState(0);
  const NUMBER_OF_STEPS = 5;
  return (
    <>
      <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
    </>
  );
};

export default App;
