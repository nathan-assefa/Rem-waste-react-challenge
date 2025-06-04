import { useState } from "react";
import { skipData, steps } from "@/lib/constant";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import ProgressSteps from "./ProgressSteps";
import SkipCard from "./SkipCard";
import Footer from "./Footer";

export default function SkipHirePage() {
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);

  const handleSelectSkip = (skipId: number) => {
    setSelectedSkip(skipId);
    console.log(`Selected skip with ID: ${skipId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <ProgressSteps steps={steps} currentStep={3} progress={50} />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Choose Your Perfect Skip
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Select the skip size that best matches your project needs. All
            prices include delivery and collection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full mx-auto">
          {skipData.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip === skip.id}
              onSelect={handleSelectSkip}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Need help choosing the right size? Our experts are here to help.
          </p>
          <Button variant="outline" size="lg" className="mr-4">
            Get Expert Advice
          </Button>
          <Button variant="ghost" size="lg">
            View Size Guide
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
