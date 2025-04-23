
import { Button } from "@/components/ui/button";
import InfoGraphic from "@/components/InfoGraphic";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Lightbulb, 
  Users, 
  GraduationCap, 
  Award, 
  Podcast, 
  BookOpen, 
  LifeBuoy, 
  Globe, 
  ArrowRight,
  MessageSquare,
  Sparkles,
  BrainCircuit
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "guidance",
      name: "Guidance & Clarity",
      icon: <Lightbulb size={24} />,
      description: "Receive clear direction through personalized mentorship from global experts or AI-powered guidance tailored to your unique path.",
      infoSteps: [
        {
          icon: <BrainCircuit size={32} />,
          title: "AI-Powered Assessment",
          description: "Our AI analyzes your goals and challenges"
        },
        {
          icon: <Users size={32} />,
          title: "Mentor Matching",
          description: "Connect with Harvard mentors in your field"
        },
        {
          icon: <Sparkles size={32} />,
          title: "Personalized Roadmap",
          description: "Follow a clear path to your specific goals"
        }
      ],
      ctaText: "Get Guidance"
    },
    {
      id: "highlights",
      name: "Achievement Highlights",
      icon: <Award size={24} />,
      description: "Showcase your accomplishments through our platform, gaining visibility with companies and organizations worldwide.",
      infoSteps: [
        {
          icon: <BookOpen size={32} />,
          title: "Document Achievements",
          description: "Upload and verify your accomplishments"
        },
        {
          icon: <Users size={32} />,
          title: "Expert Review",
          description: "Get validation from industry professionals"
        },
        {
          icon: <Globe size={32} />,
          title: "Global Showcase",
          description: "Your profile visible to companies worldwide"
        }
      ],
      ctaText: "Highlight Your Achievements"
    },
    {
      id: "mentorship",
      name: "Expert Mentorship",
      icon: <Users size={24} />,
      description: "Learn directly from leaders at prestigious institutions like Harvard and gain insights for your personal and professional growth.",
      infoSteps: [
        {
          icon: <Users size={32} />,
          title: "Mentor Selection",
          description: "Choose from our global network of experts"
        },
        {
          icon: <MessageSquare size={32} />,
          title: "Personalized Sessions",
          description: "Schedule 1-on-1 virtual mentorship meetings"
        },
        {
          icon: <Award size={32} />,
          title: "Skill Development",
          description: "Build your capabilities with expert guidance"
        }
      ],
      ctaText: "Find a Mentor"
    },
    {
      id: "kbc",
      name: "KBC Competition",
      icon: <Award size={24} />,
      description: "Participate in our knowledge competition for juniors and seniors, with monetary rewards based on your performance.",
      infoSteps: [
        {
          icon: <BookOpen size={32} />,
          title: "Registration",
          description: "Sign up for junior or senior category"
        },
        {
          icon: <BrainCircuit size={32} />,
          title: "Competition Rounds",
          description: "Show your knowledge through structured rounds"
        },
        {
          icon: <Award size={32} />,
          title: "Rewards",
          description: "Earn coins convertible to monetary prizes"
        }
      ],
      ctaText: "Join Competition"
    },
    {
      id: "podcast",
      name: "Youth Podcast",
      icon: <Podcast size={24} />,
      description: "Share your voice with the world through our podcast platform, reaching global audiences and influential leaders.",
      infoSteps: [
        {
          icon: <Users size={32} />,
          title: "Application",
          description: "Submit your podcast proposal or speaker interest"
        },
        {
          icon: <Podcast size={32} />,
          title: "Production Support",
          description: "Get guidance and technical assistance"
        },
        {
          icon: <Globe size={32} />,
          title: "Global Distribution",
          description: "Reach audiences on major podcast platforms"
        }
      ],
      ctaText: "Apply for Podcast"
    },
    {
      id: "internship",
      name: "Internships & Practical Knowledge",
      icon: <GraduationCap size={24} />,
      description: "Gain hands-on experience and connect with international startups, leaders, and organizations for real-world learning.",
      infoSteps: [
        {
          icon: <BookOpen size={32} />,
          title: "Skill Assessment",
          description: "Identify your strengths and learning needs"
        },
        {
          icon: <GraduationCap size={32} />,
          title: "Placement Matching",
          description: "Get matched with appropriate opportunities"
        },
        {
          icon: <Globe size={32} />,
          title: "International Work",
          description: "Collaborate with global organizations"
        }
      ],
      ctaText: "Find Internships"
    },
    {
      id: "lifelab",
      name: "Life Lab",
      icon: <LifeBuoy size={24} />,
      description: "Experiment with real-life challenges guided by AI that provides personalized tasks to develop leadership skills.",
      infoSteps: [
        {
          icon: <BrainCircuit size={32} />,
          title: "Profile Creation",
          description: "Share your interests, goals, and preferences"
        },
        {
          icon: <Lightbulb size={32} />,
          title: "AI Task Generation",
          description: "Receive customized real-world challenges"
        },
        {
          icon: <Users size={32} />,
          title: "Guided Implementation",
          description: "Get support as you complete your tasks"
        }
      ],
      ctaText: "Join Life Lab"
    },
    {
      id: "opportunities",
      name: "Opportunities Connector",
      icon: <Globe size={24} />,
      description: "Access a personalized AI tool that connects you with global opportunities in jobs, scholarships, grants, and government schemes.",
      infoSteps: [
        {
          icon: <Users size={32} />,
          title: "Personal Profile",
          description: "Create your detailed opportunity preferences"
        },
        {
          icon: <BrainCircuit size={32} />,
          title: "AI Matching",
          description: "Our system finds relevant opportunities worldwide"
        },
        {
          icon: <MessageSquare size={32} />,
          title: "Application Support",
          description: "Get guidance for successful applications"
        }
      ],
      ctaText: "Explore Opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-youth-purple to-youth-dark-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Youth Empire offers comprehensive programs designed to empower young leaders through guidance, opportunities, and practical skills development.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map(service => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-youth-light-purple p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-youth-purple">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={`#${service.id}`} className="text-youth-purple font-medium flex items-center hover:underline">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Service Sections */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="guidance" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-gray-100">
                {services.map(service => (
                  <TabsTrigger 
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-youth-purple data-[state=active]:text-white"
                  >
                    {service.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {services.map(service => (
              <TabsContent key={service.id} value={service.id} id={service.id}>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-youth-light-purple p-4 rounded-full text-youth-purple">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{service.name}</h2>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  <InfoGraphic
                    title={`How Our ${service.name} Works`}
                    steps={service.infoSteps}
                    className="py-8"
                  />
                  
                  <div className="mt-8 text-center">
                    <Button className="bg-youth-purple hover:bg-youth-dark-purple text-white px-8 py-6 text-lg">
                      {service.ctaText}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-youth-dark-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start by getting your Youth Empire ID card to access all of our services and global opportunities.
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

export default Services;
