import React, { useState } from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
  Input
} from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon
} from "@heroicons/react/24/outline";

export default function MultiStepFormWithStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const steps = [
    {
      label: "Step 1",
      description: "Details about your account",
      content: (
        <div className="space-y-4">
          <Input label="Full Name" />
          <Input label="Email Address" type="email" />
        </div>
      )
    },
    {
      label: "Step 2",
      description: "Your Preferences",
      content: (
        <div className="space-y-4">
          <Input label="Favorite Genre" />
          <Input label="Preferred Language" />
        </div>
      )
    },
    {
      label: "Step 3",
      description: "Confirm Details",
      content: (
        <div>
          <Typography variant="h6">Review and Confirm</Typography>
          <Typography>
            Please review the information you've entered and click "Finish" to
            submit.
          </Typography>
        </div>
      )
    }
  ];

  return (
    <div className="w-full px-24 py-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            {index === 0 && <UserIcon className="w-5 h-5" />}
            {index === 1 && <CogIcon className="w-5 h-5" />}
            {index === 2 && <BuildingLibraryIcon className="w-5 h-5" />}
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === index ? "blue-gray" : "gray"}
              >
                {step.label}
              </Typography>
              <Typography
                color={activeStep === index ? "blue-gray" : "gray"}
                className="font-normal"
              >
                {step.description}
              </Typography>
            </div>
          </Step>
        ))}
      </Stepper>
      <div className="mt-16">{steps[activeStep].content}</div>
      <div className="flex justify-between mt-8">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        {isLastStep ? (
          <Button onClick={() => alert("Form Submitted!")}>Finish</Button>
        ) : (
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
