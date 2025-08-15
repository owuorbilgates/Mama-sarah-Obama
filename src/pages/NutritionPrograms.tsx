import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, School, Heart, Users, TrendingUp, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const NutritionPrograms = () => {
  return (
    <div className="min-h-screen bg-gradient-trust">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nutrition Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Fighting child malnutrition through school feeding programs, food distribution, and nutrition education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="" size="lg" asChild style={{ backgroundColor: "#D90F12" }}>
                <Link to="/donate">Feed a Child</Link>
              </Button>
              <Button variant="trust" size="lg" asChild>
                <Link to="/volunteer">Support Our Kitchen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-foundation-hope mb-2">1,200</div>
                <p className="text-muted-foreground">Children fed daily</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-red-600 mb-2">15</div>
                <p className="text-muted-foreground">Schools with feeding programs</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-foundation-hope mb-2">300,000</div>
                <p className="text-muted-foreground">Meals served this year</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comprehensive Nutrition Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <School className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>School Feeding Programs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Providing nutritious daily meals in schools to improve student concentration, attendance, and academic performance while addressing hunger and malnutrition.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Apple className="h-8 w-8 text-red-600" />
                    <CardTitle>Emergency Food Distribution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Distributing food packages to the most vulnerable families during crises, droughts, and emergencies to prevent severe malnutrition and food insecurity.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>Malnutrition Treatment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Providing therapeutic feeding and specialized nutrition support for severely malnourished children through our partnership with local health facilities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-red-600" />
                    <CardTitle>Nutrition Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Teaching mothers and caregivers about proper nutrition, food preparation, and child feeding practices to ensure long-term health and development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Reach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Where We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Daily Meal Schedule</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Breakfast</span>
                      <span className="font-medium">7:30 AM - 8:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lunch</span>
                      <span className="font-medium">12:00 PM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Snacks</span>
                      <span className="font-medium">3:00 PM - 3:30 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Regional Coverage</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nairobi Region</span>
                      <span className="font-medium">8 schools</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Central Kenya</span>
                      <span className="font-medium">4 schools</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Western Kenya</span>
                      <span className="font-medium">3 schools</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Measuring Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-foundation-hope mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">Improved Academic Performance</h3>
                    <p className="text-muted-foreground">
                      Schools with feeding programs show 25% higher test scores and better classroom participation.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">Reduced Malnutrition</h3>
                    <p className="text-muted-foreground">
                      90% of children in our programs show improved nutritional status within six months.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <School className="h-12 w-12 text-foundation-hope mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">Higher Attendance</h3>
                    <p className="text-muted-foreground">
                      School attendance rates increase by 40% when nutritious meals are provided regularly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Community Partnerships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Handshake className="h-8 w-8 text-foundation-hope flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Local Farmers</h3>
                      <p className="text-muted-foreground">
                        We source fresh produce from local farmers, supporting the agricultural economy while providing nutritious meals for children.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Parent Volunteers</h3>
                      <p className="text-muted-foreground">
                        Parent volunteers help with meal preparation and distribution, creating community ownership and sustainability of our programs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Success Story
            </h2>
            <Card className="shadow-card">
              <CardContent className="pt-8">
                <div className="text-center">
                  <blockquote className="text-xl italic text-muted-foreground mb-6">
                    "Since the feeding program started at our school, my daughter Grace has been more energetic and focused in class. Her grades have improved significantly, and she rarely gets sick now. As a mother, I'm grateful that I don't have to worry about whether she's getting enough nutrition during the school day."
                  </blockquote>
                  <div className="flex flex-col items-center">
                    <p className="font-semibold text-lg text-foundation-hope">Catherine Mutindi</p>
                    <p className="text-muted-foreground">Parent, Kangemi Primary School</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white" style={{ backgroundColor: "#D90F12" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Us Feed More Children
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Just $15 can provide nutritious meals for a child for an entire month. Help us expand our feeding programs to reach more vulnerable children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" asChild>
              <Link to="/donate">Sponsor Meals</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/volunteer">Volunteer in Kitchen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NutritionPrograms;