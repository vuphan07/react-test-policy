import React from 'react';

export default function Stepper ({currentStep, numberOfSteps}) {
  const activeColor = (index) => currentStep >= index ? 'bg-blue-500' : 'bg-gray-300'
  const isFinalStep = (index) => index === numberOfSteps - 1

  return (
    <div className="flex items-center">
      {Array.from({length: numberOfSteps}).map((_, index) => (
        <React.Fragment key={index}>
          1
          <div className={`w-6 h-6 rounded-full ${activeColor(index)}`}></div>
          {isFinalStep(index) ? null : <div className={`w-12 h-1 ${activeColor(index)}`}></div>}
        </React.Fragment>
      ))}
    </div>
  )
}