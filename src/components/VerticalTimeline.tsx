
import { ReactNode } from "react";

interface TimelineStep {
  icon: ReactNode;
  title: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
}

interface VerticalTimelineProps {
  steps: TimelineStep[];
}

const VerticalTimeline = ({ steps }: VerticalTimelineProps) => {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-youth-purple to-youth-orange transform -translate-x-1/2"></div>

      {steps.map((step, index) => (
        <div key={index} className="relative flex items-center mb-12">
          {/* Content */}
          <div className={`flex items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Timeline point and line */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white rounded-full border-4 border-youth-purple flex items-center justify-center transform -translate-x-1/2">
              <span className="text-youth-purple font-bold">{index + 1}</span>
            </div>

            {/* Content box */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-youth-purple/10 rounded-full flex items-center justify-center mb-4">
                  <div className="text-youth-purple">{step.icon}</div>
                </div>
                <h3 className="font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {step.link && (
                  <a 
                    href={step.link.url} 
                    className="text-youth-purple text-sm mt-2 hover:underline inline-block"
                  >
                    {step.link.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
