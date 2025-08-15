import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Lightbulb, Briefcase, Sprout, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CommunityEmpowerment = () => {
  return (
    <div className="min-h-screen bg-gradient-trust">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Community Empowerment
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Building sustainable communities through youth mentorship, women's empowerment, job training, and agricultural programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="" size="lg" asChild style={{ backgroundColor: "#D90F12" }}>
                <Link to="/donate">Empower Communities</Link>
              </Button>
              <Button variant="trust" size="lg" asChild>
                <Link to="/volunteer">Join Our Programs</Link>
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
                <div className="text-4xl font-bold text-foundation-hope mb-2">800+</div>
                <p className="text-muted-foreground">Adults trained in job skills</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-red-600 mb-2">25</div>
                <p className="text-muted-foreground">Women's cooperatives established</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-foundation-hope mb-2">300</div>
                <p className="text-muted-foreground">Youth mentorship partnerships</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Empowerment Programs */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comprehensive Empowerment Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>Youth Mentorship</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connecting young people with experienced mentors who provide guidance on education, career development, and life skills to help them reach their full potential.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-red-600" />
                    <CardTitle>Women's Empowerment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Supporting women through skills training, microfinance opportunities, and leadership development to create economic independence and community leadership.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>Job Training Programs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Providing practical vocational training in carpentry, tailoring, computer skills, and other trades to help community members secure sustainable employment.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sprout className="h-8 w-8 text-red-600" />
                    <CardTitle>Agricultural Cooperatives</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Establishing farming cooperatives that provide training in modern agricultural techniques, access to markets, and collective bargaining power for better prices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps Children */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How Adult Empowerment Uplifts Children
            </h2>
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-semibold text-xl mb-4">Economic Stability</h3>
                      <p className="text-muted-foreground">
                        When parents have stable income through job training and business development, children benefit from better nutrition, healthcare, and educational opportunities. Our programs help families break the cycle of poverty.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foundation-hope mb-2">70%</div>
                      <p className="text-muted-foreground">increase in household income</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
                      <p className="text-muted-foreground">of children continue education</p>
                    </div>
                    <div className="order-1 md:order-2">
                      <h3 className="font-semibold text-xl mb-4">Educational Continuity</h3>
                      <p className="text-muted-foreground">
                        Empowered parents prioritize their children's education and have the resources to support school attendance, supplies, and higher education aspirations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Community Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-foundation-hope flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Women's Cooperative Success</h3>
                      <p className="text-muted-foreground mb-4">
                        "Our women's group started with 10 members learning to make soap. Now we have 30 women, our own shop, and we're supplying products to three neighboring towns. My children are all in school because of this business."
                      </p>
                      <p className="text-sm font-medium text-foundation-hope">
                        Agnes Njeri, Cooperative Leader
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Target className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Youth Leadership Development</h3>
                      <p className="text-muted-foreground mb-4">
                        "The mentorship program changed my life completely. I learned computer skills, started my own cybercafe, and now I'm training other young people. I'm able to support my younger siblings' education and give back to my community."
                      </p>
                      <p className="text-sm font-medium text-red-600">
                        David Mwangi, Youth Entrepreneur
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Goals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our 2025 Empowerment Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>Economic Growth Targets</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">New businesses to launch</span>
                      <span className="font-semibold text-foundation-hope">100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Adults to train in job skills</span>
                      <span className="font-semibold text-foundation-hope">500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Women's groups to establish</span>
                      <span className="font-semibold text-foundation-hope">15</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="h-8 w-8 text-red-600" />
                    <CardTitle>Community Impact Goals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Youth mentorships</span>
                      <span className="font-semibold text-red-600">200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Farming cooperatives</span>
                      <span className="font-semibold text-red-600">8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Communities to reach</span>
                      <span className="font-semibold text-red-600">25</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Development Focus */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Building Sustainable Communities
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our empowerment programs focus on creating lasting change by developing local leadership, building economic resilience, and fostering community-driven solutions that continue to benefit families long after our direct involvement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foundation-hope mb-2">5 Years</div>
                    <p className="text-muted-foreground">Average program sustainability after completion</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">80%</div>
                    <p className="text-muted-foreground">Of participants become community leaders</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foundation-hope mb-2">95%</div>
                    <p className="text-muted-foreground">Program satisfaction rate</p>
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
            Invest in Community Empowerment
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            When we empower adults with skills and opportunities, entire families and communities thrive. Help us create sustainable change that lifts up children for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" asChild>
              <Link to="/donate">Support Empowerment</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/volunteer">Become a Mentor</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityEmpowerment;