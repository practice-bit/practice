
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Trophy, Star } from "lucide-react";

const Highlights = () => {
  // Mock highlight data
  const successStories = [
    {
      id: 1,
      name: "Amit Sharma",
      achievement: "Launched a sustainable agriculture startup after participating in Life Lab",
      image: "/placeholder.svg",
      quote: "The mentorship I received helped me refine my business model and secure seed funding.",
      impact: "Now employing 15 people and serving 200+ farmers"
    },
    {
      id: 2,
      name: "Priya Verma",
      achievement: "Received full scholarship to Harvard after guidance from Youth Empire mentors",
      image: "/placeholder.svg",
      quote: "My mentor helped me navigate the complex application process and prepare for interviews.",
      impact: "Studying Computer Science and working on AI solutions for healthcare"
    },
    {
      id: 3,
      name: "Rajiv Kumar",
      achievement: "Developed an award-winning mobile app for rural healthcare",
      image: "/placeholder.svg",
      quote: "Life Lab gave me the real-world testing ground to validate my idea and iterate quickly.",
      impact: "App now used by 50+ healthcare centers across rural India"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      achievement: "Selected for prestigious international youth leadership summit",
      image: "/placeholder.svg",
      quote: "The opportunities connector AI helped me find this perfect opportunity that matched my interests.",
      impact: "Now leading environmental initiatives in her community"
    },
  ];

  const innovationHighlights = [
    {
      id: 1,
      title: "Eco-Innovation Challenge",
      description: "Youth-led projects addressing environmental challenges through technology",
      participants: 120,
      winners: ["Plastic Recycling Solution", "Water Conservation App", "Biodegradable Packaging"]
    },
    {
      id: 2,
      title: "Social Entrepreneurship Bootcamp",
      description: "Intensive program for developing sustainable social enterprise models",
      participants: 85,
      winners: ["Education Access Platform", "Healthcare Delivery System", "Financial Inclusion Tool"]
    },
    {
      id: 3,
      title: "Tech for Good Hackathon",
      description: "Creating technological solutions for pressing social issues",
      participants: 250,
      winners: ["Disability Assistance App", "Mental Health Platform", "Community Resource Connector"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-youth-purple to-youth-dark-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Award size={60} />
          </div>
          <h1 className="text-4xl font-bold mb-6">Youth Achievements & Highlights</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Celebrating exceptional accomplishments and innovations by youth from our global community.
          </p>
        </div>
      </div>

      {/* Tabbed Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="success" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="success" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
                  Success Stories
                </TabsTrigger>
                <TabsTrigger value="innovation" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
                  Innovation Highlights
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="success">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {successStories.map(story => (
                  <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5">
                        <img 
                          src={story.image}
                          alt={story.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6 md:w-3/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Trophy size={20} className="text-youth-purple" />
                          <span className="text-youth-purple font-semibold">Achievement</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                        <p className="font-medium mb-4">{story.achievement}</p>
                        <blockquote className="border-l-4 border-youth-light-purple pl-4 italic mb-4 text-gray-600">
                          "{story.quote}"
                        </blockquote>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-sm font-medium">Impact:</p>
                          <p className="text-sm text-gray-600">{story.impact}</p>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="innovation">
              <div className="space-y-8">
                {innovationHighlights.map(highlight => (
                  <Card key={highlight.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="bg-youth-light-purple rounded-full p-3">
                          <Star size={24} className="text-youth-purple" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{highlight.title}</h3>
                          <p className="text-gray-600 mb-4">{highlight.description}</p>
                          
                          <div className="flex items-center gap-6 mb-6">
                            <div>
                              <span className="text-sm text-gray-500">Participants</span>
                              <p className="text-2xl font-bold text-youth-purple">{highlight.participants}</p>
                            </div>
                            <div className="h-8 border-r border-gray-300"></div>
                            <div>
                              <span className="text-sm text-gray-500">Top Projects</span>
                              <p className="text-2xl font-bold text-youth-purple">{highlight.winners.length}</p>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Winning Innovations:</h4>
                            <div className="flex flex-wrap gap-2">
                              {highlight.winners.map((winner, idx) => (
                                <span 
                                  key={idx}
                                  className="bg-youth-light-purple text-youth-purple px-3 py-1 rounded-full text-sm"
                                >
                                  {winner}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join Youth Empire today and access mentorship, resources and opportunities to achieve your goals.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-youth-purple hover:bg-youth-dark-purple text-white px-8 py-6">
              Apply for Mentorship
            </Button>
            <Button variant="outline" className="border-youth-purple text-youth-purple hover:bg-youth-purple hover:text-white px-8 py-6">
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
