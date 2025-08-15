import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Award, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const EducationSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-trust">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Education Support Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Empowering children through quality education, school supplies, mentorship, and teacher training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="" size="lg" asChild style={{ backgroundColor: "#D90F12" }}>
                <Link to="/donate">Support Education</Link>
              </Button>
              <Button variant="trust" size="lg" asChild>
                <Link to="/volunteer">Become a Mentor</Link>
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
                <div className="text-4xl font-bold text-foundation-hope mb-2">500+</div>
                <p className="text-muted-foreground">Children enrolled in school since 2020</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-red-600 mb-2">50</div>
                <p className="text-muted-foreground">Teachers trained and certified</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-foundation-hope mb-2">95%</div>
                <p className="text-muted-foreground">Student retention rate</p>
              </CardContent>
            </Card>
          </div>
          
        </div>
        
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-foundation-trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Transforming Lives Through Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>School Supplies & Materials</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Providing essential school supplies, textbooks, uniforms, and learning materials to ensure children have everything they need for success in their educational journey.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-red-600" />
                    <CardTitle>Tuition Assistance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Covering school fees and educational expenses for vulnerable children, ensuring financial barriers don't prevent access to quality education.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-foundation-hope" />
                    <CardTitle>Mentorship Programs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connecting students with caring mentors who provide academic support, life skills guidance, and emotional encouragement throughout their educational path.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-red-600" />
                    <CardTitle>Teacher Training</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Investing in educator development through professional training programs, modern teaching methods, and ongoing support to improve educational quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-6xl mx-auto space-y-4">
          <p></p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Education Support Programs
            </h2>
          <p></p>
          <p className="text-muted-foreground">Our Education Support Programs are designed to break the cycle of poverty by ensuring that vulnerable children have access to quality education, proper nutrition, and a supportive learning environment. We believe that every child deserves the opportunity to learn, grow, and thrive regardless of their background or circumstances. Through a combination of sponsorship, school feeding initiatives, health interventions, and caregiver support, we are creating lasting change in the communities we serve.</p>
          <p className="text-muted-foreground">One of the core components of this program is our Education Sponsorship initiative, which provides direct support to 200 vulnerable children. This includes covering tuition fees, supplying essential learning materials such as uniforms, textbooks, and stationery, and meeting other related school expenses. We go beyond simply enrolling children in school by closely monitoring their attendance, retention, and academic progress. This ensures that the support they receive truly impacts their learning journey, helping them stay in school, improve academically, and dream bigger for their futures.</p>
          <p className="text-muted-foreground">To address one of the biggest barriers to learning hunger, we run a School Feeding Program in partnership with four targeted Early Childhood Development (ECD) centres. Each child enrolled in these centres receives two nutritious meals, breakfast and lunch, every school day. The food provided includes maize, beans, Unimix porridge flour, cooking oil, and moringa powder, offering both energy and essential nutrients. With around 180 school days per year, this consistent nutritional support boosts children’s concentration, school attendance, and overall health, allowing them to fully participate in their education.</p>
          <p className="text-muted-foreground">Good health is essential for children to thrive in school, which is why we incorporate regular health screenings and growth monitoring for children under the age of five. These interventions help detect and address malnutrition early. We also provide vitamin A supplementation to boost immunity and deworming treatments to improve nutrient absorption. By combining education with health interventions, we ensure that children are not only learning but also growing stronger and healthier.
</p>
          <p className="text-muted-foreground">We also recognize that a child’s success in school is closely tied to the well-being of their caregivers. For this reason, we support 308 pregnant and lactating mothers in our target communities with both nutritional assistance and parenting education. Over 120 days, mothers receive essential food rations including maize, beans, cooking oil, moringa powder, and porridge flour. This support improves maternal health, supports infant development, and ensures adequate nourishment during this critical period. In addition, our Responsive Positive Parenting program equips caregivers with the skills needed to create nurturing home environments. Through a Training of Trainers (TOT) approach, community facilitators and ECD caregivers are trained on early stimulation, responsive caregiving, nutrition, and maternal mental health, enabling them to pass these skills on to mothers throughout the community.</p>
          <p className="text-muted-foreground">Beyond direct educational and health interventions, we also engage the broader community in building sustainable livelihoods that support education. Through community mobilization and sensitization sessions, we introduce households to poultry keeping as a source of both nutrition and income. Participants learn about proper poultry housing, feeding, breeding, and disease prevention. By improving household incomes and food security, we strengthen the overall foundation that enables children to stay in school and succeed.</p>
          <p className="text-muted-foreground">Through these combined efforts, we are not simply sending children to school; we are fostering a future where education, nutrition, health, and community empowerment work together to transform lives. By investing in children and supporting families, we are planting seeds of change that will bear fruit for generations to come.</p>

        </div>
      </section>



      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Heart className="h-8 w-8 text-foundation-hope flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Sarah's Journey</h3>
                      <p className="text-muted-foreground mb-4">
                        "Thanks to the education support program, I was able to complete my secondary education and am now studying to become a teacher. I want to give back to my community the same way this foundation gave to me."
                      </p>
                      <p className="text-sm font-medium text-foundation-hope">
                        Sarah M., University Student
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
                      <h3 className="font-semibold text-lg mb-2">Community Impact</h3>
                      <p className="text-muted-foreground mb-4">
                        "Our village school has been transformed. With new supplies and trained teachers, our children are achieving higher test scores and staying in school longer. The future looks brighter for our community."
                      </p>
                      <p className="text-sm font-medium text-red-600">
                        James K., Village Elder
                      </p>
                    </div>
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
            Help Us Educate More Children
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Your support can provide a child with a full year of education, including supplies, tuition, and mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" asChild>
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EducationSupport;