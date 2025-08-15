import { useState } from "react"
import { useNavigate } from "react-router-dom" // <-- add this
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Handshake, Megaphone, ArrowRight, Star } from "lucide-react"
import VolunteerModal from "@/components/VolunteerModal"
import PartnerModal from "@/components/PartnerModal"
import AdvocateModal from "@/components/AdvocateModal"

const GetInvolved = () => {
  const navigate = useNavigate(); // <-- initialize navigate
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [advocateModalOpen, setAdvocateModalOpen] = useState(false);

  const handleButtonClick = (type: string) => {
    switch(type) {
      case 'volunteer':
        setVolunteerModalOpen(true);
        break;
      case 'partner':
        setPartnerModalOpen(true);
        break;
      case 'advocate':
        setAdvocateModalOpen(true);
        break;
      case 'donate':
        navigate("/donate"); // <-- navigate to donate page
        break;
      default:
        break;
    }
  };

  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your financial support directly impacts the lives of vulnerable children through our education, healthcare, and community programs.",
      actions: ["Monthly sponsorship", "One-time donations", "Program-specific giving"],
      buttonText: "Donate Now",
      buttonType: "donate",
      variant: "outline" as const,
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and contribute your skills to make a lasting impact in the communities we serve.",
      actions: ["On-site volunteering", "Skill-based volunteering", "Event support"],
      buttonText: "Volunteer With Us",
      buttonType: "volunteer",
      variant: "volunteer" as const,
      color: "text-red-600"
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Organizations and businesses can partner with us to amplify our impact through resources, expertise, or collaborative programs.",
      actions: ["Corporate partnerships", "Grant opportunities", "Resource sharing"],
      buttonText: "Become a Partner",
      buttonType: "partner",
      variant: "default" as const,
      color: "text-foundation-hope"
    },
    {
      icon: Megaphone,
      title: "Advocate",
      description: "Help spread awareness about our mission and the needs of vulnerable children by becoming an advocate in your community.",
      actions: ["Social media advocacy", "Community presentations", "Fundraising events"],
      buttonText: "Start Advocating",
      buttonType: "advocate",
      variant: "outline" as const,
      color: "text-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Volunteer",
      quote: "Volunteering with the foundation has been one of the most rewarding experiences of my life. Seeing the direct impact on children's lives is incredible.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Monthly Donor",
      quote: "Knowing that my monthly contribution helps a child get education and healthcare gives me immense satisfaction. The foundation is transparent and effective.",
      rating: 5
    },
    {
      name: "Grace Wanjiku",
      role: "Community Partner",
      quote: "Our organization's partnership with the foundation has helped us reach more families in need. Their approach is professional and community-focused.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get <span className="text-primary-glow">Involved</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              There are many ways to support our mission and make a meaningful difference in the lives of vulnerable children across Kenya. Find the way that works best for you.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ways to <span className="text-primary">Support</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose how you'd like to contribute to our mission of transforming lives and building stronger communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ways.map((way, index) => {
              const Icon = way.icon
              return (
                <Card 
                  key={way.title}
                  className="group hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-soft group-hover:shadow-warm transition-all duration-300 mb-4 ${way.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {way.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {way.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      {way.actions.map((action) => (
                        <div key={action} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{action}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant={way.variant} 
                      className="w-full group/btn"
                      onClick={() => handleButtonClick(way.buttonType)}
                    >
                      {way.buttonText}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-trust-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our <span className="text-primary">Supporters Say</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hear from people who have joined our mission and experienced the joy of making a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="p-6 text-center hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
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
              Ready to Make a <span className="text-primary-glow">Difference?</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Every contribution, no matter how small, helps us transform lives and build stronger communities across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
              <Button variant="hero" size="lg">
                Contact Us
              </Button>
            </a>
            
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Modals */}
      <VolunteerModal 
        isOpen={volunteerModalOpen} 
        onClose={() => setVolunteerModalOpen(false)} 
      />
      <PartnerModal 
        isOpen={partnerModalOpen} 
        onClose={() => setPartnerModalOpen(false)} 
      />
      <AdvocateModal 
        isOpen={advocateModalOpen} 
        onClose={() => setAdvocateModalOpen(false)} 
      />
    </div>
  )
}

export default GetInvolved
