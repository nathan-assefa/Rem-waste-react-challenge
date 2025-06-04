import { Progress } from "@/components/ui/progress";
import type { LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  label: string;
  completed?: boolean;
  active?: boolean;
};

type ProgressStepsProps = {
  steps: Step[];
  currentStep: number;
  progress: number;
};

export default function ProgressSteps({
  steps,
  currentStep,
  progress,
}: ProgressStepsProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-slate-600">
          Step {currentStep} of {steps.length}
        </h2>
        <span className="text-sm text-slate-500">{progress}% Complete</span>
      </div>

      <Progress value={progress} className="h-2 mb-6" />

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                step.completed
                  ? "bg-green-100 text-green-600 border-2 border-green-200"
                  : step.active
                  ? "bg-blue-100 text-blue-600 border-2 border-blue-200 ring-4 ring-blue-100"
                  : "bg-slate-100 text-slate-400 border-2 border-slate-200"
              }`}
            >
              <step.icon className="w-5 h-5" />
            </div>
            <span
              className={`text-xs font-medium text-center ${
                step.completed || step.active
                  ? "text-slate-900"
                  : "text-slate-500"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
