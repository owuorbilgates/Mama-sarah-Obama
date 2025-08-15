import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Users, BookOpen, Camera, Code, Stethoscope, ArrowRight, CheckCircle, Star } from "lucide-react"
import { supabase } from "@/integrations/supabase/client"
import { useToast } from "@/hooks/use-toast"

const Volunteer = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    opportunity: "",
    experience: "",
    motivation: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.opportunity) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Insert data into Supabase
      const { error } = await supabase
        .from('volunteers')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          opportunity: formData.opportunity,
          experience: formData.experience || null,
          motivation: formData.motivation || null
        }])

      if (error) {
        throw error
      }

      toast({
        title: "Application Submitted!",
        description: "Thank you! Your volunteer application has been received.",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        opportunity: "",
        experience: "",
        motivation: ""
      })

    } catch (error: any) {
      console.error('Error submitting application:', error)
      toast({
        title: "Submission Failed",
        description: "Sorry, something went wrong. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  const opportunities = [
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Help with tutoring, teaching, and educational program development.",
      commitment: "4-6 hours/week",
      skills: ["Teaching", "Tutoring", "Curriculum development"],
      color: "text-primary"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Programs",
      description: "Support health education, medical camps, and community health initiatives.",
      commitment: "6-8 hours/week",
      skills: ["Medical background", "Health education", "Community outreach"],
      color: "text-red-600"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Engage with communities, organize events, and build relationships.",
      commitment: "5-7 hours/week",
      skills: ["Communication", "Event planning", "Community engagement"],
      color: "text-foundation-hope"
    },
    {
      icon: Camera,
      title: "Media & Communications",
      description: "Help with photography, social media, and storytelling for our programs.",
      commitment: "3-5 hours/week",
      skills: ["Photography", "Writing", "Social media"],
      color: "text-red-600"
    },
    {
      icon: Code,
      title: "Technology Support",
      description: "Assist with website maintenance, database management, and tech solutions.",
      commitment: "4-6 hours/week",
      skills: ["Web development", "Database management", "IT support"],
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Fundraising & Events",
      description: "Organize fundraising events and help with donor relations.",
      commitment: "5-8 hours/week",
      skills: ["Event planning", "Sales", "Relationship building"],
      color: "text-red-600"
    }
  ]

  const benefits = [
    {
      title: "Personal Fulfillment",
      description: "Experience the joy of making a real difference in children's lives and communities."
    },
    {
      title: "Skill Development",
      description: "Gain valuable experience and develop new skills in a meaningful context."
    },
    {
      title: "Cultural Exchange",
      description: "Immerse yourself in Kenyan culture and build lasting friendships."
    },
    {
      title: "Professional Network",
      description: "Connect with like-minded individuals and expand your professional network."
    },
    {
      title: "Certificate of Service",
      description: "Receive official recognition for your volunteer service and contributions."
    },
    {
      title: "Ongoing Support",
      description: "Benefit from mentorship and support throughout your volunteer journey."
    }
  ]

  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Education Volunteer",
      quote: "Volunteering with the foundation has been life-changing. Seeing the children's progress and knowing I played a part in their education is incredibly rewarding.",
      rating: 5,
      duration: "6 months"
    },
    {
      name: "David Ochieng",
      role: "Healthcare Volunteer",
      quote: "The experience has been amazing. I've learned so much about community health while helping improve healthcare access for families in need.",
      rating: 5,
      duration: "1 year"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Volunteer <span className="text-primary-glow">With Us</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Join our community of dedicated volunteers and make a meaningful impact in the lives of vulnerable children and communities across Kenya. Your skills and passion can help create lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Volunteer <span className="text-primary">Opportunities</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover how your unique skills and interests can contribute to our mission of transforming lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon
              return (
                <Card 
                  key={opportunity.title}
                  className="group hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-soft group-hover:shadow-warm transition-all duration-300 mb-4 ${opportunity.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {opportunity.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {opportunity.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Time Commitment:</span>
                      <span className="font-medium text-foreground">{opportunity.commitment}</span>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Skills Needed:</h4>
                      <div className="space-y-1">
                        {opportunity.skills.map((skill) => (
                          <div key={skill} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits of Volunteering */}
      <section className="py-16 lg:py-24 bg-trust-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why <span className="text-primary">Volunteer?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Volunteering with us offers rewarding experiences and personal growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="p-6 text-center hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Volunteer <span className="text-primary">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hear from our volunteers about their experiences and the impact they've made.
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
                      Volunteering for {testimonial.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 lg:py-24 bg-trust-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Apply to <span className="text-primary">Volunteer</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to make a difference? Fill out the form below to start your volunteer journey.
              </p>
            </div>

            <Card className="p-8 bg-card/80 backdrop-blur border-border/50">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      placeholder="Enter your phone number" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="opportunity">Volunteer Opportunity *</Label>
                  <Select 
                    value={formData.opportunity} 
                    onValueChange={(value) => handleInputChange("opportunity", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your preferred volunteer opportunity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Education Support">Education Support</SelectItem>
                      <SelectItem value="Healthcare Services">Healthcare Services</SelectItem>
                      <SelectItem value="Community Outreach">Community Outreach</SelectItem>
                      <SelectItem value="Media and Communications">Media and Communications</SelectItem>
                      <SelectItem value="Technology Support">Technology Support</SelectItem>
                      <SelectItem value="Fundraising Events">Fundraising Events</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea 
                    id="experience" 
                    placeholder="Tell us about your relevant experience and skills..."
                    className="min-h-[100px]"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to volunteer with us?</Label>
                  <Textarea 
                    id="motivation" 
                    placeholder="Share your motivation for volunteering..."
                    className="min-h-[100px]"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24" size="lg" asChild style={{ backgroundColor: "#D90F12" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your <span className="text-primary-glow">Volunteer Journey</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Join our community of changemakers and help us transform lives across Kenya. Every hour you contribute makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default Volunteer