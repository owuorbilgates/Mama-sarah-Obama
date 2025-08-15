import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, Award, Play } from "lucide-react"
import feedingImage from "@/assets/programms/feeding.jpg"
import sportingImage from "@/assets/programms/sports.jpg"
import schoolImage from "@/assets/programms/educationw.jpg"

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every child with love and understanding, recognizing their unique circumstances and potential."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of community support and work closely with local families and leaders."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on sustainable, measurable outcomes that create lasting change in children's lives."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all our programs and services to ensure maximum benefit."
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
              About <span className="text-primary-glow">Our Mission</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Since 2009, the Mama Sarah Obama Children Foundation has been dedicated to transforming the lives of vulnerable children, orphans, and widows across Kenya through comprehensive support programs.
            </p>
          </div>
        </div>
      </section>

      {/* About Overview with Video Area */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Mama Sarah Obama Children Foundation (MSOCF) was established in 2009 by the late Mama Sarah Obama, grandmother of former U.S. President Barack Obama. A dedicated humanitarian and community leader, Mama Sarah devoted her life to uplifting vulnerable populations, with a particular focus on improving the lives of children, women, and youth in Kenya and beyond. Guided by resilience and compassion, and supported by like-minded community members, she transformed her personal mission of service into a lasting legacy built on inclusivity and sustainable development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a modest grassroots effort to provide food and shelter for orphans has since grown into a dynamic, multifaceted organization tackling some of the most pressing challenges faced by underserved communities. Today, MSOCF runs impactful programs in education, child protection, healthcare, WASH (Water, Sanitation, and Hygiene), women’s empowerment, economic development, youth vocational training, and climate action.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In 2014, Mama Sarah’s dedication and leadership were internationally recognized when she was honored with the Education Pioneer Award by the United Nations. This accolade celebrated the Foundation’s remarkable contributions to improving the lives of orphans, particularly those affected by the HIV/AIDS epidemic, and underscored her enduring impact on communities across Kenya and the world.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2">            
            <iframe
              className="w-full h-80 rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/00uDRkn-Ex8"
              title="Mama Sarah Obama Children Foundation Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

              <div className="grid grid-cols-2 gap-4">
            <img src={feedingImage} alt="Community Outreach" className="rounded-2xl object-cover h-64 w-full shadow-md hover:scale-105 transition-transform" />
            <img src={schoolImage} alt="Children Education" className="rounded-2xl object-cover h-64 w-full shadow-md hover:scale-105 transition-transform" />            
          </div>
          <img src={sportingImage} alt="Youth sports and comunity empowerement" className="rounded-2xl object-cover h-64 w-full shadow-md hover:scale-105 transition-transform" />

          
            
          </div>
        </div>
      </section>

     

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 bg-card/80 backdrop-blur border-border/50 hover:shadow-warm transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To foster a democratic and equitable living environment where vulnerable and underprivileged individuals especially women, youth, and children, have access to quality education, healthcare, sustainable livelihoods, and essential infrastructure, regardless of their social or economic status.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 bg-card/80 backdrop-blur border-border/50 hover:shadow-warm transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-accent-strong/20 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A sustainable, empowered, and inclusive society free of inequalities and discrimination, where children, youth, and women enjoy equal opportunities and rights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-trust-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              These core values guide everything we do and shape how we serve our communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="text-center p-6 hover:shadow-warm transition-all duration-300 hover:scale-105 group bg-card/80 backdrop-blur animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-soft group-hover:shadow-warm transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

     

      {/* Call to Action */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#D90F12" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-primary-glow">Mission</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Together, we can continue making a meaningful difference in the lives of vulnerable children across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-involved">
                <Button variant="hero" size="lg">Get Involved</Button>
              </a>
              <a href="/programs">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Learn About Our Projects
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

export default About
