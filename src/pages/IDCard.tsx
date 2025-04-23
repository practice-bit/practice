
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, User, Calendar, Award } from "lucide-react";

const IDCard = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    institution: "",
    passType: "standard"
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePassTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, passType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPayment(true);
  };
  
  const passTypes = {
    standard: {
      name: "Standard Pass",
      price: 499,
      features: ["Basic Mentorship Access", "Monthly Newsletter", "Event Notifications"]
    },
    premium: {
      name: "Premium Pass",
      price: 999,
      features: ["All Standard Features", "Personalized Guidance", "KBC Competition Entry", "Quarterly Workshop Access"]
    },
    elite: {
      name: "Elite Pass",
      price: 1999,
      features: ["All Premium Features", "Harvard Mentor Sessions", "Priority Internship Placement", "Global Opportunity Alerts", "Podcast Participation"]
    }
  };
  
  const initiateRazorpayPayment = () => {
    // This would integrate with Razorpay in a real implementation
    alert("Razorpay integration would be implemented here. This would open the payment gateway in a real application.");
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Youth Empire ID Card</h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Get your official pass to unlock global opportunities
          </p>
          
          {!showPayment ? (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Apply for Your ID Card</CardTitle>
                <CardDescription>
                  Fill in your details to get started with your Youth Empire journey
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="flex">
                        <div className="bg-gray-100 p-2 rounded-l-md flex items-center">
                          <User size={18} className="text-gray-500" />
                        </div>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="rounded-l-none"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 9999999999"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <div className="flex">
                        <div className="bg-gray-100 p-2 rounded-l-md flex items-center">
                          <Calendar size={18} className="text-gray-500" />
                        </div>
                        <Input
                          id="dob"
                          name="dob"
                          type="date"
                          value={formData.dob}
                          onChange={handleInputChange}
                          className="rounded-l-none"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution/Organization</Label>
                      <Input
                        id="institution"
                        name="institution"
                        placeholder="Your School/College/Organization"
                        value={formData.institution}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="passType">Pass Type</Label>
                      <Select 
                        value={formData.passType}
                        onValueChange={handlePassTypeChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a pass type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard Pass (₹499)</SelectItem>
                          <SelectItem value="premium">Premium Pass (₹999)</SelectItem>
                          <SelectItem value="elite">Elite Pass (₹1999)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <Award size={20} className="mr-2 text-youth-purple" />
                      {passTypes[formData.passType as keyof typeof passTypes].name} Benefits:
                    </h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {passTypes[formData.passType as keyof typeof passTypes].features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t flex justify-end">
                    <Button type="submit" className="bg-youth-purple hover:bg-youth-dark-purple">
                      Continue to Payment
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>
                  Secure payment via Razorpay for your {passTypes[formData.passType as keyof typeof passTypes].name}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 border rounded-lg bg-gray-50">
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-600">Pass Type:</span>
                      <span className="font-medium">{passTypes[formData.passType as keyof typeof passTypes].name}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-medium">₹{passTypes[formData.passType as keyof typeof passTypes].price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{formData.name}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <Button 
                      onClick={initiateRazorpayPayment} 
                      className="w-full bg-youth-purple hover:bg-youth-dark-purple flex items-center justify-center gap-2"
                    >
                      <CreditCard size={18} />
                      Pay with Razorpay - ₹{passTypes[formData.passType as keyof typeof passTypes].price}
                    </Button>
                    
                    <p className="text-sm text-gray-500 mt-4 text-center">
                      Your payment is secured by Razorpay's encryption. We do not store your payment details.
                    </p>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setShowPayment(false)}
                >
                  Back to Form
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default IDCard;
