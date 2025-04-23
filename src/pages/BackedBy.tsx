
import { Card, CardContent } from "@/components/ui/card";
import { FileText, FileImage, Building } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BackedBy = () => {
  // Mock supporters data
  const academicSupporters = [
    {
      id: 1,
      name: "Harvard University",
      logo: "/placeholder.svg",
      description: "Providing mentors and academic resources to support Youth Empire's educational initiatives.",
      testimonial: "We believe in Youth Empire's mission to connect young leaders with global opportunities."
    },
    {
      id: 2,
      name: "Oxford University",
      logo: "/placeholder.svg",
      description: "Offering research support and guidance for Youth Empire's international programs.",
      testimonial: "Youth Empire represents the kind of global collaboration we value in higher education."
    },
    {
      id: 3,
      name: "Indian Institute of Technology",
      logo: "/placeholder.svg",
      description: "Contributing technical expertise and mentorship for innovation challenges.",
      testimonial: "We're proud to support Youth Empire in nurturing the next generation of technical leaders."
    },
    {
      id: 4,
      name: "National University of Singapore",
      logo: "/placeholder.svg",
      description: "Providing regional mentorship and resources across Southeast Asia.",
      testimonial: "Youth Empire's approach to connecting global youth aligns with our vision for education."
    }
  ];

  const corporateSupporters = [
    {
      id: 1,
      name: "Global Tech Solutions",
      logo: "/placeholder.svg",
      description: "Sponsoring technology access and innovation challenges for youth participants.",
      testimonial: "Investing in Youth Empire means investing in the future leaders of the tech industry."
    },
    {
      id: 2,
      name: "International Finance Group",
      logo: "/placeholder.svg",
      description: "Providing financial literacy programs and scholarship funding.",
      testimonial: "We believe in empowering youth with both knowledge and opportunities."
    },
    {
      id: 3,
      name: "EcoSustain Enterprises",
      logo: "/placeholder.svg",
      description: "Supporting environmental innovation initiatives and sustainability education.",
      testimonial: "Youth Empire is creating the environmental leaders our planet needs."
    }
  ];

  const governmentSupport = [
    {
      id: 1,
      name: "Ministry of Education",
      logo: "/placeholder.svg",
      description: "Official government partner supporting educational outreach programs.",
      testimonial: "Youth Empire's programs align with our national priorities for youth development."
    },
    {
      id: 2,
      name: "International Youth Council",
      logo: "/placeholder.svg",
      description: "Providing policy guidance and international recognition for youth achievements.",
      testimonial: "We endorse Youth Empire's approach to global youth empowerment."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-youth-dark-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Supporters & Backers</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Youth Empire is proudly supported by prestigious academic institutions, corporate partners, and governmental organizations worldwide.
          </p>
        </div>
      </div>

      {/* Supporters Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who Backs Youth Empire</h2>

          <Tabs defaultValue="academic" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="academic" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
                  Academic Institutions
                </TabsTrigger>
                <TabsTrigger value="corporate" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
                  Corporate Partners
                </TabsTrigger>
                <TabsTrigger value="government" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
                  Government & NGOs
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="academic">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {academicSupporters.map(supporter => (
                  <SupporterCard key={supporter.id} supporter={supporter} icon={<FileText size={24} />} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="corporate">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {corporateSupporters.map(supporter => (
                  <SupporterCard key={supporter.id} supporter={supporter} icon={<Building size={24} />} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="government">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {governmentSupport.map(supporter => (
                  <SupporterCard key={supporter.id} supporter={supporter} icon={<FileImage size={24} />} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Recognition Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">International Recognition</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Youth Empire has been recognized for its impact on global youth development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="bg-youth-light-purple rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileImage size={32} className="text-youth-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence in Youth Engagement</h3>
              <p className="text-gray-600">Global Youth Development Council</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="bg-youth-light-purple rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileImage size={32} className="text-youth-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Most Innovative Youth Program</h3>
              <p className="text-gray-600">International Education Forum</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="bg-youth-light-purple rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileImage size={32} className="text-youth-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impact Award for Social Change</h3>
              <p className="text-gray-600">World Leaders Summit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Statement */}
      <div className="py-16 bg-gradient-to-r from-youth-purple to-youth-dark-purple text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Support That Makes a Difference</h2>
          <p className="text-xl mb-8">
            The backing of these prestigious organizations enables Youth Empire to provide world-class opportunities to young people across the globe. Together, we're building a future where every young person can realize their full potential.
          </p>
        </div>
      </div>
    </div>
  );
};

// Supporter Card Component
interface Supporter {
  id: number;
  name: string;
  logo: string;
  description: string;
  testimonial: string;
}

interface SupporterCardProps {
  supporter: Supporter;
  icon: React.ReactNode;
}

const SupporterCard = ({ supporter, icon }: SupporterCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-gray-100 p-8 flex items-center justify-center">
            <img 
              src={supporter.logo} 
              alt={supporter.name}
              className="max-h-24 max-w-[80%]"
            />
          </div>
          <div className="md:w-3/5 p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-youth-purple">
                {icon}
              </div>
              <h3 className="text-xl font-bold">{supporter.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{supporter.description}</p>
            <blockquote className="border-l-4 border-youth-light-purple pl-4 italic text-gray-600">
              "{supporter.testimonial}"
            </blockquote>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BackedBy;
