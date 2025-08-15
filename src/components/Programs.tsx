import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Droplets, Utensils, ArrowRight } from "lucide-react"
import educationImage from "@/assets/programms/educationw.jpg"
import healthImage from "@/assets/programms/health.jpg"
import waterImage from "@/assets/programms/water.jpg"
import nutritionImage from "@/assets/programms/banana.jpg"

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Child sponsorship programs ensuring every orphan and vulnerable child gets quality education and a chance for a better future.",
      image: educationImage,
      stats: "200+ children sponsored",
      color: "text-primary",
      link: "/education-support"
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      description: "Comprehensive healthcare programs ensuring children receive proper medical care and live healthier lifestyles.",
      image: healthImage,
      stats: "1,000+ medical checkups",
      color: "text-red-600",
      link: "/healthcare-services"
    },
    {
      icon: Droplets,
      title: "Clean Water Access",
      description: "Sinking boreholes to provide clean drinking water and tackle water-borne diseases in rural villages.",
      image: waterImage,
      stats: "15 wells constructed",
      color: "text-foundation-hope",
      link: "/clean-water-access"
    },
    {
      icon: Utensils,
      title: "Nutrition Programs",
      description: "Promoting food security and improving nutrition by working with children and their families within communities.",
      image: nutritionImage,
      stats: "500+ families reached",
      color: "text-red-600",
      link: "/nutrition-programs"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-trust-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We work to create lasting change in the lives of vulnerable children and communities across Kenya.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <Card key={program.title} className="group hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur border-border/50">
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
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-semibold ${program.color}`}>
                      {program.stats}
                    </span>
                    <a href={program.link}>
                    <Button variant="ghost" size="sm" className="group/btn">
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

        {/* CTA Section */}
        <div className="text-center">
          <a href="/programs">
          <Button variant="default" size="lg" className="group">
            View All Programs
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
        </div>
      </div>
    </section>
  )
}

export default Programs