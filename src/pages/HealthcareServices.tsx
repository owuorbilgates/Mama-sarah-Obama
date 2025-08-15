import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Stethoscope, Shield, Users, TrendingUp, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HealthcareServices = () => {
  return (
    <div className="min-h-screen bg-gradient-trust">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Healthcare Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Providing essential healthcare through clinics, medical camps, immunizations, and health education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="" size="lg" asChild style={{ backgroundColor: "#D90F12" }}>
                <Link to="/donate">Support Healthcare</Link>
              </Button>
              <Button variant="trust" size="lg" asChild>
                <Link to="/volunteer">Join Medical Team</Link>
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
                <div className="text-4xl font-bold text-foundation-hope mb-2">2,500+</div>
                <p className="text-muted-foreground">Patients treated annually</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-red-600 mb-2">12</div>
                <p className="text-muted-foreground">Mobile health clinics operating</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-foundation-hope mb-2">85%</div>
                <p className="text-muted-foreground">Child immunization coverage</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comprehensive Healthcare Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Stethoscope className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>Community Health Clinics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Operating permanent and mobile health clinics in underserved areas, providing primary healthcare, maternal health services, and preventive care to families and children.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-red-600" />
                    <CardTitle>Immunization Programs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Conducting regular vaccination campaigns to protect children from preventable diseases, working closely with local health authorities to ensure comprehensive coverage.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>Health Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Training community health workers and educating families on hygiene, nutrition, disease prevention, and basic healthcare practices to promote long-term wellness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="h-8 w-8 text-red-600" />
                    <CardTitle>Emergency Medical Care</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Providing emergency medical assistance and coordinating with local hospitals for serious cases requiring specialized treatment and care.
                  </p>
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
              Strategic Healthcare Partnerships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-8 w-8 text-foundation-hope flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Local Health Providers</h3>
                      <p className="text-muted-foreground">
                        Collaborating with regional hospitals, clinics, and healthcare professionals to extend our reach and ensure quality care delivery in remote communities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Medical Equipment Support</h3>
                      <p className="text-muted-foreground">
                        Partnering with medical equipment suppliers and international organizations to provide essential diagnostic tools, medicines, and healthcare supplies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Real Impact in Communities
            </h2>
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-xl mb-4">Reduced Child Mortality</h3>
                    <p className="text-muted-foreground text-lg">
                      Our healthcare interventions have contributed to a 40% reduction in child mortality rates in served communities over the past three years, thanks to improved access to preventive care and early treatment.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">Improved School Attendance</h3>
                    <p className="text-muted-foreground">
                      Regular health check-ups and treatments have resulted in 60% fewer sick days among school children, directly improving educational outcomes.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">Maternal Health Progress</h3>
                    <p className="text-muted-foreground">
                      Our maternal health programs have ensured safer deliveries and reduced complications for new mothers in rural areas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white" style={{ backgroundColor: "#D90F12" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Us Save More Lives
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Your contribution can provide essential healthcare services to families in need and help us expand our medical outreach programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" asChild>
              <Link to="/donate">Donate for Health</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/volunteer">Volunteer with Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareServices;