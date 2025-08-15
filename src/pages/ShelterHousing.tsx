import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Hammer, Shield, Users, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ShelterHousing = () => {
  return (
    <div className="min-h-screen bg-gradient-trust">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Shelter & Housing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Providing safe, secure housing through emergency shelters, permanent construction, and home repairs for vulnerable families
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="" size="lg" asChild style={{ backgroundColor: "#D90F12" }}>
                <Link to="/donate">Build a Home</Link>
              </Button>
              <Button variant="trust" size="lg" asChild>
                <Link to="/volunteer">Join Construction</Link>
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
                <div className="text-4xl font-bold text-foundation-hope mb-2">150</div>
                <p className="text-muted-foreground">Homes built or repaired</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-red-600 mb-2">600+</div>
                <p className="text-muted-foreground">People housed safely</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-foundation-hope mb-2">12</div>
                <p className="text-muted-foreground">Emergency shelters constructed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Housing Solutions */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comprehensive Housing Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>Emergency Shelters</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Providing immediate temporary housing for orphans, displaced families, and those in crisis situations, ensuring basic safety and dignity during difficult times.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Home className="h-8 w-8 text-red-600" />
                    <CardTitle>Permanent Housing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Constructing durable, affordable homes for vulnerable families, providing long-term stability and a foundation for children's growth and development.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Hammer className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>Home Repairs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Renovating and repairing existing homes to improve living conditions, ensuring families have safe, weatherproof housing with proper sanitation facilities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-red-600" />
                    <CardTitle>Community-Built Housing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Engaging local communities in construction projects, providing skills training and employment opportunities while building stronger neighborhoods.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Housing Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How Safe Housing Changes Lives
            </h2>
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-semibold text-xl mb-4">Educational Stability</h3>
                      <p className="text-muted-foreground">
                        Children with stable housing are 3 times more likely to complete their education. Our housing programs ensure children can attend school consistently without worrying about where they'll sleep.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foundation-hope mb-2">85%</div>
                      <p className="text-muted-foreground">of housed children complete primary school</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
                      <p className="text-muted-foreground">reduction in child illness</p>
                    </div>
                    <div className="order-1 md:order-2">
                      <h3 className="font-semibold text-xl mb-4">Health Improvements</h3>
                      <p className="text-muted-foreground">
                        Proper housing with clean water access and sanitation facilities dramatically reduces waterborne diseases and respiratory infections among children.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Stories from Beneficiaries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Heart className="h-8 w-8 text-foundation-hope flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">A Mother's Gratitude</h3>
                      <p className="text-muted-foreground mb-4">
                        "Before we had our own home, my three children and I lived in a cramped, leaking shelter. We were always worried about our safety. Now we have a beautiful, secure home where my children can study and play safely. They're doing better in school and are so much happier."
                      </p>
                      <p className="text-sm font-medium text-foundation-hope">
                        Ruth Akinyi, Mother of Three
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Star className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">A New Beginning</h3>
                      <p className="text-muted-foreground mb-4">
                        "After my husband passed away, I thought we would be homeless forever. The foundation not only built us a home but also taught me construction skills. I now help build homes for other families and can support my children independently."
                      </p>
                      <p className="text-sm font-medium text-red-600">
                        Grace Wambui, Single Mother
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Construction Approach
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-foundation-hope text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Family Assessment</h3>
                  <p className="text-muted-foreground">We identify the most vulnerable families through community referrals and comprehensive needs assessments.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent-strong text-white rounded-full w-8 h-8 flex items-center justify-center font-bold" style={{ backgroundColor: "#D90F12" }}>2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Land Verification</h3>
                  <p className="text-muted-foreground">We work with local authorities to secure appropriate land and ensure all legal requirements are met.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-foundation-hope text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Community Construction</h3>
                  <p className="text-muted-foreground">Local community members participate in construction, learning valuable skills while building homes for their neighbors.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent-strong text-white rounded-full w-8 h-8 flex items-center justify-center font-bold" style={{ backgroundColor: "#D90F12" }}>4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Handover & Support</h3>
                  <p className="text-muted-foreground">We provide ongoing support for maintenance and help families establish their new homes successfully.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our 2025 Housing Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foundation-hope mb-2">100</div>
                    <p className="text-muted-foreground">New homes to build</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">50</div>
                    <p className="text-muted-foreground">Homes to repair and upgrade</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foundation-hope mb-2">200</div>
                    <p className="text-muted-foreground">Community members to train in construction</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white" style={{ backgroundColor: "#D90F12" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Us Build More Safe Homes
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Every home we build creates a foundation for a family's future. Help us provide safe housing for more vulnerable children and families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" asChild>
              <Link to="/donate">Fund a Home</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/volunteer">Volunteer with Construction</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShelterHousing;