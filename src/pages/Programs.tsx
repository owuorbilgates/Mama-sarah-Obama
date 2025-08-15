import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Droplets, Utensils, Home, Users, ArrowRight, CheckCircle } from "lucide-react"
import educationImage from "@/assets/programms/educationw.jpg"
import healthImage from "@/assets/programms/programs-health.jpg"
import waterImage from "@/assets/programms/programs-water.jpg"
import cleanWater from "@/assets/programms/clean_water.jpg"
import nutritionImage from "@/assets/programms/banana.jpg"
import housingImage from "@/assets/programms/house.jpg"
import communityImage from "@/assets/programms/community.jpg"
import economicImage from "@/assets/programms/eonomic.jpg"
import youthskilling from "@/assets/programms/youth.jpg"
import womenEmpowermentImage from "@/assets/programms/women.jpg"
import climateImage from "@/assets/programms/environment.jpg"

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Comprehensive child sponsorship programs ensuring every orphan and vulnerable child receives quality education and skills training for a better future.",
      image: educationImage,
      stats: "200+ children sponsored",
      color: "text-primary",
      link: "/education-support",
      features: [
        "School fee sponsorship",
        "Educational materials and uniforms",
        "After-school tutoring programs",
        "Vocational skills training",
        "Mentorship programs"
      ],
      impact: "Since 2009, we've sponsored over 200 children through primary and secondary education, with 85% completing their studies successfully."
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      description: "Comprehensive healthcare programs ensuring children and families receive proper medical care, health education, and live healthier lifestyles.",
      image: healthImage,
      stats: "1,000+ medical checkups",
      color: "text-red-600",
      link: "/healthcare-services",
      features: [
        "Regular health checkups",
        "Immunization programs",
        "Nutrition counseling",
        "Mental health support",
        "Health education workshops"
      ],
      impact: "We've conducted over 1,000 medical checkups and health screenings, significantly improving health outcomes in our target communities."
    },
    {
      icon: Droplets,
      title: "Clean Water Access",
      description: "Sinking boreholes and constructing water systems to provide clean drinking water and tackle water-borne diseases in rural villages.",
      image: cleanWater,
      stats: "15 wells constructed",
      color: "text-foundation-hope",
      link: "/clean-water-access",
      features: [
        "Borehole construction",
        "Water system maintenance",
        "Community water committees",
        "Hygiene education",
        "Water quality testing"
      ],
      impact: "Our 15 constructed wells now serve over 5,000 community members with clean, safe drinking water year-round."
    },
    {
      icon: Utensils,
      title: "Nutrition Programs",
      description: "Promoting food security and improving nutrition by working with children and their families to ensure proper dietary needs are met.",
      image: nutritionImage,
      stats: "500+ families reached",
      color: "text-red-600",
      link: "/nutrition-programs",
      features: [
        "School feeding programs",
        "Nutrition education",
        "Home garden projects",
        "Food distribution",
        "Cooking demonstrations"
      ],
      impact: "Over 500 families have improved their food security and nutritional knowledge through our comprehensive nutrition programs."
    },
    {
      icon: Home,
      title: "Shelter & Housing",
      description: "Providing safe shelter and housing improvements for vulnerable children and families in need of secure living environments.",
      image: housingImage,
      stats: "50+ homes improved",
      color: "text-primary",
      link: "/shelter-housing",
      features: [
        "Emergency shelter provision",
        "Home repairs and improvements",
        "Sanitation facilities",
        "Safety assessments",
        "Community housing projects"
      ],
      impact: "We've improved living conditions for over 50 families through housing repairs, new construction, and sanitation improvements."
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Building stronger communities through leadership development, skills training, and empowerment programs for sustainable change.",
      image: communityImage,
      stats: "100+ leaders trained",
      color: "text-red-600",
      link: "/community-empowerment",
      features: [
        "Leadership training",
        "Women's empowerment groups",
        "Youth development programs",
        "Community organizing",
        "Microfinance initiatives"
      ],
      impact: "Our community empowerment programs have trained over 100 local leaders and established 20 community groups for sustainable development."
    },

// Added form the document provided
    {
      icon: Users,
      title: "Economic Empowerment",
      description: "We promote economic self-reliance among vulnerable groups, focusing on women and youth. Our Economic Empowerment Program helps individuals break the cycle of poverty through:",
      image: economicImage,
      stats: "100+ Empowered",
      color: "text-red-600",
      link: "/community-empowerment",
      features: [
        "Income-generating activities (IGAs)",
        "Entrepreneurship and skills training",
        "Financial literacy and inclusion",
        "Support for women’s economic groups",
        "Microfinance initiatives"
      ],
      impact: "Our community empowerment programs have trained over 100 local leaders and established 20 community groups for sustainable development."
    },
    {
      icon: Users,
      title: "Youth Skilling and Employability",
      description: "Addressing youth unemployment, our program equips young people with practical skills and opportunities through:",
      image: youthskilling,
      stats: "500+ youths trained",
      color: "",
      link: "",
      features: [
        "Vocational training",
        "Digital and ICT skills development",
        "Internships and apprenticeships",
        "Job placement and career guidance"

      ],
      impact: ""
    },
    {
      icon: Users,
      title: "Women’s Empowerment",
      description: "Our Women’s Empowerment Program promotes gender equality and strengthens economic independence for women in marginalized communities through:",
      image: womenEmpowermentImage,
      stats: "500+ Women empowered",
      color: "",
      link: "",
      features: [
        "Leadership and capacity building",
        "Self-help groups (SHGs)",
        "Economic empowerment initiatives",
        "Gender equality advocacy and education"

      ],
      impact: ""
    },
    {
      icon: Users,
      title: "Climate Action and Environmental Sustainability",
      description: "We focus on building resilient communities through education and sustainable practices related to environmental health, including:",
      image: climateImage,
      stats: "50+ Projects completed",
      color: "",
      link: "",
      features: [
        "Environmental education and awareness",
        "Community-led conservation projects",
        "Climate-resilient agriculture",
        "Waste management and recycling"

      ],
      impact: ""
    }


  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "#4ADE80" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-primary-glow">Programs</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              We work across six key areas to create lasting change in the lives of vulnerable children and communities across Kenya through comprehensive, sustainable programs.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive <span className="text-primary">Support</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our programs address the most critical needs of vulnerable children and communities, providing holistic support for sustainable development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <Card 
                  key={program.title}
                  className="group hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute top-4 left-4 p-3 bg-white/10 backdrop-blur rounded-full ${program.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`text-sm font-semibold text-white ${program.color}`}>
                        {program.stats}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {program.features.slice(0, 3).map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <a href={program.link}>
                      <Button variant="ghost" size="sm" className="w-full group/btn">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Program Information */}
      <section className="py-16 lg:py-24 bg-trust-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Program <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See how our programs are creating lasting change in communities across Kenya.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {programs.slice(0, 3).map((program, index) => {
              const Icon = program.icon
              return (
                <Card 
                  key={program.title}
                  className="p-8 bg-card/80 backdrop-blur border-border/50 hover:shadow-warm transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-soft ${program.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{program.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{program.impact}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {program.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-64 lg:h-48 overflow-hidden rounded-lg">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24"  style={{ backgroundColor: "#E0010C" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Support Our <span className="text-primary-glow">Programs</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Your support helps us expand these vital programs and reach more vulnerable children and communities across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate">
              <Button variant="hero" size="lg">
                Donate to Programs
              </Button>
            </a>
            <a href="/volunteer">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Volunteer With Us
              </Button>
            </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Programs