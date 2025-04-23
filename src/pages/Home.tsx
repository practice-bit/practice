
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import InfoGraphic from "@/components/InfoGraphic";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Users, GraduationCap, Podcast, FileText, Globe, LifeBuoy, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Empowering Youth Across The Globe"
        subtitle="Youth Empire provides mentorship, guidance, and opportunities to connect young leaders with global platforms."
        image="/placeholder.svg"
        ctaText="Explore Our Services"
        ctaLink="/services"
      />
      
      {/* Services Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Youth Empire offers comprehensive programs to empower the next generation of global leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Guidance & Clarity"
              description="AI and personal mentorship to help you find your direction."
              icon={<Lightbulb size={24} />}
            />
            <ServiceCard
              title="Achievement Highlights"
              description="Get your achievements recognized and showcased to companies."
              icon={<Award size={24} />}
            />
            <ServiceCard
              title="Expert Mentorship"
              description="Learn from leaders at Harvard and other prestigious institutions."
              icon={<Users size={24} />}
            />
            <ServiceCard
              title="KBC Competition"
              description="Win prizes based on your knowledge and performance."
              icon={<Award size={24} />}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-youth-purple text-youth-purple hover:bg-youth-purple hover:text-white">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Infographic Section */}
      <InfoGraphic
        title="How Our Mentorship Works"
        steps={[
          {
            icon: <Users size={32} />,
            title: "Connect with Mentors",
            description: "Get matched with expert mentors from prestigious institutions"
          },
          {
            icon: <GraduationCap size={32} />,
            title: "Personalized Guidance",
            description: "Receive tailored advice and direction for your specific goals"
          },
          {
            icon: <Award size={32} />,
            title: "Achieve & Showcase",
            description: "Accomplish your goals and get highlighted to companies"
          }
        ]}
        className="bg-gray-50"
      />
      
      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from youth who have transformed their lives through our programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Priya Sharma"
              role="Student, Delhi University"
              quote="The mentorship program at Youth Empire connected me with a Harvard professor who guided me to my dream scholarship."
              image="/placeholder.svg"
            />
            <TestimonialCard
              name="Rahul Kumar"
              role="Young Entrepreneur"
              quote="Life Lab helped me experiment with real business challenges and I was able to start my first successful venture."
              image="/placeholder.svg"
            />
            <TestimonialCard
              name="Aisha Patel"
              role="Podcast Host"
              quote="I started as an intern and now host my own podcast interviewing global changemakers - all thanks to Youth Empire!"
              image="/placeholder.svg"
            />
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-youth-purple to-youth-dark-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of youth who are developing their skills and connecting with global opportunities.
          </p>
          <Link to="/id-card">
            <Button className="bg-white text-youth-purple hover:bg-gray-100 px-8 py-6 rounded-full text-lg">
              Get Your Youth Empire ID Card
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
