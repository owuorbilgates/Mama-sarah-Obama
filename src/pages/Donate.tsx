import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Shield, Users, BookOpen, Droplets, Stethoscope, CheckCircle, Star, CreditCard, Lock, Copy, ExternalLink } from "lucide-react"

const Donate = () => {
  const donationOptions = [
    {
      amount: 25,
      description: "Provides school supplies for one child for a month",
      icon: BookOpen,
      color: "text-primary"
    },
    {
      amount: 50,
      description: "Covers basic healthcare for one child for two months",
      icon: Stethoscope,
      color: "text-red-600"
    },
    {
      amount: 100,
      description: "Sponsors one child's education for one month",
      icon: Users,
      color: "text-foundation-hope"
    },
    {
      amount: 250,
      description: "Helps construct clean water access for a family",
      icon: Droplets,
      color: "text-red-600"
    }
  ]

  const impactStats = [
    {
      icon: Users,
      value: "500+",
      label: "Children Supported",
      description: "Vulnerable children receiving ongoing support"
    },
    {
      icon: BookOpen,
      value: "200+",
      label: "Students Sponsored",
      description: "Children receiving quality education"
    },
    {
      icon: Stethoscope,
      value: "1,000+",
      label: "Health Checkups",
      description: "Medical examinations provided"
    },
    {
      icon: Droplets,
      value: "15",
      label: "Wells Constructed",
      description: "Clean water access points built"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Monthly Donor",
      quote: "Knowing that my monthly donation helps a child get education gives me immense joy. The foundation's transparency about fund usage is exceptional.",
      rating: 5,
      amount: "$50/month"
    },
    {
      name: "Michael Chen",
      role: "Corporate Partner",
      quote: "Our company has been supporting the foundation for two years. The regular updates and impact reports show exactly how our contributions make a difference.",
      rating: 5,
      amount: "$2,000/year"
    }
  ]

  const trustIndicators = [
    {
      icon: Shield,
      title: "Secure Donations",
      description: "All donations are processed through secure, encrypted platforms"
    },
    {
      icon: CheckCircle,
      title: "Transparent Impact",
      description: "Detailed reports on how your donation is used and the impact created"
    },
    {
      icon: Heart,
      title: "Direct Impact",
      description: "100% of donations go directly to programs - no administrative fees"
    }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Lives Through <span className="text-primary-glow">Giving</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Your donation directly impacts the lives of vulnerable children across Kenya. Every contribution, no matter the size, helps us provide education, healthcare, and hope for a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See how your donation can make a real difference in the lives of children and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <Card 
                  key={option.amount}
                  className="group hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur border-border/50 animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-soft group-hover:shadow-warm transition-all duration-300 ${option.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        ${option.amount}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full group/btn">
                      Donate ${option.amount}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Donation <span className="text-primary">Methods</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose your preferred way to support our mission and transform lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Bank Transfer Option */}
            <Card className="p-8 bg-card/80 backdrop-blur border-border/50 hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Donate via Bank Transfer
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Send your donation directly to our bank account using international wire transfer.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Account Name</span>
                        <p className="font-semibold text-foreground">Mama Sarah Obama Children Foundation</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Account Number</span>
                        <p className="font-semibold text-foreground">1111880271</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard("1111880271")}
                        className="h-8 w-8 p-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Bank Name</span>
                        <p className="font-semibold text-foreground">KCB BANK KENYA LTD</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Branch</span>
                        <p className="font-semibold text-foreground">SIAYA</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">SWIFT Code</span>
                        <p className="font-semibold text-foreground">KCBLKENX</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard("KCBLKENX")}
                        className="h-8 w-8 p-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PayPal Option */}
            <Card className="p-8 bg-card/80 backdrop-blur border-border/50 hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <ExternalLink className="h-6 w-6 text-primary" />
                  Donate Online via PayPal
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Click below to donate securely via PayPal.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="bg-primary/5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Quick & Secure</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Donate instantly using your PayPal account or credit card. No registration required.
                    </p>
                    <Button 
                      size="lg" 
                      className="w-full bg-[#0070ba] hover:bg-[#005a9b] text-white"
                      onClick={() => window.open("https://www.paypal.com/donate?token=h2MBGIhZNHym8v18KVCnaVEbXSOKy53GFurlNB_K1xMpah397xuo8U_NeCVafoAeLrcniU72Ix4dcT47", "_blank")}
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Donate with PayPal
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Secure payment processing by PayPal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Donor <span className="text-primary">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hear from our supporters about the difference their donations have made.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="p-6 hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed text-center">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Donating {testimonial.amount}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#D90F12" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Making a <span className="text-primary-glow">Difference Today</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Every donation, regardless of size, creates positive change in the lives of vulnerable children across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Donate Now
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn About Our Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Donate