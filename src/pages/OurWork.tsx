import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { 
  BookOpen, 
  Heart, 
  Droplets, 
  Utensils, 
  Users, 
  Award, 
  Target,
  ArrowRight,
  CheckCircle 
} from "lucide-react"
import educationImage from "@/assets/programs-education.jpg"
import healthImage from "@/assets/programs-health.jpg"
import waterImage from "@/assets/programs-water.jpg"

const OurWork = () => {
  const programs = [
    {
      id: "education",
      title: "Education Support",
      description: "Comprehensive educational support ensuring every child has access to quality learning opportunities.",
      icon: BookOpen,
      image: educationImage,
      stats: [
        { label: "Children Sponsored", value: "200+" },
        { label: "Schools Supported", value: "12" },
        { label: "Graduation Rate", value: "95%" }
      ],
      activities: [
        "Child sponsorship programs",
        "School fee assistance",
        "Uniform and learning materials provision",
        "After-school tutoring programs",
        "Vocational training initiatives"
      ],
      impact: "Our education programs have helped over 200 children complete their primary and secondary education, with 95% of our sponsored students successfully graduating and moving on to higher education or vocational training."
    },
    {
      id: "health",
      title: "Healthcare Services",
      description: "Ensuring children and families have access to quality healthcare and live healthier lifestyles.",
      icon: Heart,
      image: healthImage,
      stats: [
        { label: "Medical Checkups", value: "1,000+" },
        { label: "Families Served", value: "300+" },
        { label: "Health Campaigns", value: "24" }
      ],
      activities: [
        "Regular health screenings and checkups",
        "Vaccination programs",
        "Nutrition education workshops",
        "Mental health support services",
        "Emergency medical assistance"
      ],
      impact: "Through our healthcare initiatives, we've conducted over 1,000 medical checkups and health screenings, helping to prevent and treat illnesses while promoting healthy living practices in our communities."
    },
    {
      id: "water",
      title: "Clean Water Access",
      description: "Providing sustainable access to clean, safe drinking water for rural communities.",
      icon: Droplets,
      image: waterImage,
      stats: [
        { label: "Wells Constructed", value: "15" },
        { label: "People Served", value: "2,500+" },
        { label: "Water Projects", value: "20" }
      ],
      activities: [
        "Borehole drilling and well construction",
        "Water system maintenance",
        "Community hygiene education",
        "Rainwater harvesting systems",
        "Water quality testing programs"
      ],
      impact: "Our water projects have provided clean drinking water access to over 2,500 people across 15 communities, significantly reducing water-borne diseases and improving overall community health."
    },
    {
      id: "nutrition",
      title: "Nutrition Programs",
      description: "Combating malnutrition and promoting food security through sustainable agriculture.",
      icon: Utensils,
      image: educationImage,
      stats: [
        { label: "Families Reached", value: "500+" },
        { label: "Gardens Established", value: "30" },
        { label: "Nutrition Rate Improvement", value: "40%" }
      ],
      activities: [
        "Community vegetable gardens",
        "Nutrition education workshops",
        "School feeding programs",
        "Agricultural training",
        "Food distribution during emergencies"
      ],
      impact: "Our nutrition programs have improved food security for over 500 families, establishing 30 community gardens and achieving a 40% improvement in child nutrition rates in our target areas."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary-glow">Work</span> & Impact
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
              Transforming lives through education, healthcare, clean water access, and nutrition programs across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-warm transition-all duration-300">
                <CardContent className="space-y-4">
                  <Target className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide holistic education and welfare that enables each learner to acquire knowledge and develop social and moral values.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-warm transition-all duration-300">
                <CardContent className="space-y-4">
                  <Award className="h-12 w-12 text-red-600 mx-auto" />
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be a centre of creativity and excellence in the provision of quality child care and early childhood education.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-warm transition-all duration-300">
                <CardContent className="space-y-4">
                  <Users className="h-12 w-12 text-foundation-hope mx-auto" />
                  <h3 className="text-xl font-semibold">Our Values</h3>
                  <p className="text-muted-foreground">
                    Excellence, Leading by Example, Teamwork, Creativity, and Integrity guide everything we do.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="py-16 lg:py-24 bg-trust-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our comprehensive programs designed to create lasting change in communities across Kenya.
            </p>
          </div>

          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-card/50 backdrop-blur">
              {programs.map((program) => {
                const Icon = program.icon
                return (
                  <TabsTrigger 
                    key={program.id} 
                    value={program.id}
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{program.title.split(' ')[0]}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {programs.map((program) => (
              <TabsContent key={program.id} value={program.id} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Program Image */}
                  <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Program Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {program.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Activities */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Program Activities</h4>
                      <ul className="space-y-2">
                        {program.activities.map((activity) => (
                          <li key={activity} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="bg-card/50 p-4 rounded-lg border border-border/50">
                      <h4 className="text-lg font-semibold text-foreground mb-2">Program Impact</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {program.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 " style={{ backgroundColor: "#E0010C" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join us in our mission to transform lives and build stronger communities across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Support Our Programs
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OurWork