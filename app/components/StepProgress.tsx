import React from 'react';

interface Step {
  number: number;
  label: string;
  completed?: boolean;
}

interface StepProgressProps {
  steps: readonly Step[];
  currentStep: number;
}

export const StepProgress: React.FC<StepProgressProps> = ({ steps, currentStep }) => {
  const segmentCount = Math.max(steps.length - 1, 1);
  const linePercent = ((currentStep - 1) / segmentCount) * 100;

  return (
    <div className="relative mb-10 md:mb-12">
      <div className="absolute top-4 left-0 right-0 -z-10 h-px bg-gray-300" />

      <div
        className="absolute top-4 left-0 -z-10 h-px bg-black transition-all duration-300"
        style={{ width: `${linePercent}%` }}
      />

      <div className="flex justify-between gap-2">
        {steps.map((step) => {
          const isCompleted = step.number < currentStep;
          const isActive = step.number === currentStep;

          return (
            <div key={step.number} className="flex min-w-0 flex-1 flex-col items-center gap-2">
              <div
                className={`
                  flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300
                  ${
                    isActive || isCompleted
                      ? 'bg-black text-white'
                      : 'bg-gray-200 text-gray-500'
                  }
                `}
              >
                {isCompleted ? '✓' : step.number}
              </div>

              <span
                className={`
                  max-w-[9rem] text-center text-[0.7rem] font-medium leading-snug sm:max-w-none sm:text-xs
                  ${isActive ? 'font-bold text-black' : isCompleted ? 'text-gray-600' : 'text-gray-400'}
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
