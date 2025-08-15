import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, Heart, Home } from "lucide-react"

const Impact = () => {
  const stats = [
    {
      icon: Users,
      value: "25000+",
      label: "Children Supported",
      description: "Vulnerable children receiving ongoing support and care",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      value: "200+",
      label: "Students Sponsored",
      description: "Children receiving quality education through our programs",
      color: "text-red-600"
    },
    {
      icon: Heart,
      value: "3,000+",
      label: "Health Checkups",
      description: "Medical examinations and treatments provided",
      color: "text-foundation-hope"
    },
    {
      icon: Home,
      value: "15",
      label: "Wells Constructed",
      description: "Clean water access points built in rural communities",
      color: "text-red-600"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Since 2009, we've been making a meaningful difference in the lives of children and communities across Kenya. Here's what we've achieved together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card 
                key={stat.label} 
                className="text-center p-6 hover:shadow-warm transition-all duration-300 hover:scale-105 group bg-card/80 backdrop-blur animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-soft group-hover:shadow-warm transition-all duration-300 ${stat.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Impact Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl sm:text-3xl font-medium text-foreground italic leading-relaxed">
              "We believe that every child deserves the opportunity to live a healthy and productive life. There is nothing more life-changing than providing a young child with a family and education."
            </blockquote>
            <cite className="block mt-6 text-lg text-muted-foreground font-medium">
              — Mama Sarah Obama Children Foundation
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact