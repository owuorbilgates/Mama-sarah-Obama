import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Wrench, CloudRain, BookOpen, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CleanWaterAccess = () => {
  return (
    <div className="min-h-screen bg-gradient-trust">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Clean Water Access
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Providing sustainable water solutions through borehole drilling, purification systems, and sanitation education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="" size="lg" asChild style={{ backgroundColor: "#D90F12" }}>
                <Link to="/donate">Fund Water Projects</Link>
              </Button>
              <Button variant="trust" size="lg" asChild>
                <Link to="/volunteer">Join Water Team</Link>
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
                <div className="text-4xl font-bold text-foundation-hope mb-2">25</div>
                <p className="text-muted-foreground">Water points constructed</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-red-600 mb-2">8,000+</div>
                <p className="text-muted-foreground">People with clean water access</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-foundation-hope mb-2">75%</div>
                <p className="text-muted-foreground">Reduction in waterborne diseases</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Water Solutions */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Sustainable Water Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Wrench className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>Borehole Drilling</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Drilling deep water boreholes equipped with solar-powered pumps to provide reliable, year-round access to clean groundwater for entire communities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Droplets className="h-8 w-8 text-red-600" />
                    <CardTitle>Water Purification</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Installing water treatment systems and teaching communities safe water storage practices to ensure water remains clean from source to consumption.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CloudRain className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>Rainwater Harvesting</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Building rainwater collection systems for schools and health facilities, providing sustainable water storage during rainy seasons for use throughout the year.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-red-600" />
                    <CardTitle>Sanitation Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Teaching proper hygiene practices, sanitation methods, and water conservation techniques to ensure long-term health benefits and resource sustainability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Transforming Daily Life
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-foundation-hope mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">Improved School Attendance</h3>
                    <p className="text-muted-foreground">
                      Children no longer need to walk hours for water, allowing them to attend school regularly and focus on their education.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">Women's Empowerment</h3>
                    <p className="text-muted-foreground">
                      Women have more time for income-generating activities and caring for their families instead of collecting water.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Droplets className="h-12 w-12 text-foundation-hope mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">Better Health Outcomes</h3>
                    <p className="text-muted-foreground">
                      Access to clean water dramatically reduces waterborne illnesses and improves overall community health.
                    </p>
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
              Community Success Story
            </h2>
            <Card className="shadow-card">
              <CardContent className="pt-8">
                <div className="text-center">
                  <blockquote className="text-xl italic text-muted-foreground mb-6">
                    "Before the borehole was drilled, our children would miss school to help fetch water from distant sources. Now they attend classes every day, and our village has seen a remarkable improvement in health and education outcomes. The women in our community have also started small businesses with the time they've saved."
                  </blockquote>
                  <div className="flex flex-col items-center">
                    <p className="font-semibold text-lg text-foundation-hope">Mary Wanjiku</p>
                    <p className="text-muted-foreground">Community Leader, Kibera Village</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Water Project Process
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-foundation-hope text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Community Assessment</h3>
                  <p className="text-muted-foreground">We work with local leaders to identify the most suitable locations and assess community needs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent-strong text-white rounded-full w-8 h-8 flex items-center justify-center font-bold" style={{ backgroundColor: "#D90F12" }}>2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Technical Survey</h3>
                  <p className="text-muted-foreground">Our technical team conducts hydrogeological surveys to determine the best drilling sites.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-foundation-hope text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Construction & Installation</h3>
                  <p className="text-muted-foreground">We drill boreholes, install pumps, and set up water distribution systems with community involvement.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent-strong text-white rounded-full w-8 h-8 flex items-center justify-center font-bold" style={{ backgroundColor: "#D90F12" }}>4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Training & Handover</h3>
                  <p className="text-muted-foreground">We train local water committees on maintenance and establish sustainable management systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white" style={{ backgroundColor: "#E0010C" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Bring Clean Water to More Communities
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Every donation helps us drill new boreholes and bring life-changing clean water access to families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" asChild>
              <Link to="/donate">Fund a Water Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/get-involved">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CleanWaterAccess;