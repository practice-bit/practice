
import React from "react";

interface InfoGraphicProps {
  title: string;
  steps: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  className?: string;
}

const InfoGraphic = ({ title, steps, className }: InfoGraphicProps) => {
  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-youth-purple to-youth-orange -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white rounded-full p-4 shadow-lg border-4 border-youth-purple mb-6">
                  <div className="text-youth-purple text-2xl">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGraphic;
