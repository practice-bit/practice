
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  reversed?: boolean;
}

const Hero = ({ title, subtitle, image, ctaText, ctaLink, reversed = false }: HeroProps) => {
  return (
    <div className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <div className="w-full md:w-1/2">
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg shadow-xl max-h-[500px] w-full object-cover"
            />
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
            
            {ctaText && ctaLink && (
              <div className="pt-4">
                <Link to={ctaLink}>
                  <Button className="bg-youth-purple hover:bg-youth-dark-purple text-white px-8 py-6 rounded-full flex items-center gap-2 text-lg">
                    {ctaText}
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
