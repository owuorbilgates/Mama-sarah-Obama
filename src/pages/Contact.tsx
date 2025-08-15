import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Send } from "lucide-react"
import { useState } from "react"
import { supabase } from "@/integrations/supabase/client"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email/contact', {
        body: {
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      })

      if (error) throw error

      toast({
        title: "Success!",
        description: data.message || "Thank you! Your message has been sent successfully.",
      })

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Physical Address",
      details: ["Office -Siaya Community Library Complex.", "Kenya, East Africa"],
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@obamachildren.org"],
      color: "text-red-600"
    },
    
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      color: "text-red-600"
    }
  ]

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact <span className="text-primary-glow">Us</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have questions about our programs, want to get involved, or need support, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reach out to us through any of the following channels. We're committed to responding promptly to all inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card 
                  key={info.title}
                  className="text-center p-6 hover:shadow-warm transition-all duration-300 hover:scale-105 group bg-card/80 backdrop-blur border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="space-y-4">
                    <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-soft group-hover:shadow-warm transition-all duration-300 ${info.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 lg:py-24 bg-trust-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 bg-card/80 backdrop-blur border-border/50 hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground mb-4">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What is this regarding?" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full group" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card className="p-6 bg-card/80 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground mb-4">
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Interactive map coming soon
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Office -Siaya Community Library Complex.

  Siaya County town next to Siaya Post Office
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="p-6 bg-card/80 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground mb-4">
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Stay connected with our latest updates and news on social media.
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors group"
                        >
                          <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 bg-accent/10 backdrop-blur border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground mb-4">
                    Emergency Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    For urgent matters or emergencies:
                  </p>
                  <p className="text-foreground font-semibold">
                    +254 721 214 440
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available 24/7 for child welfare emergencies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#E0010C" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Make a <span className="text-primary-glow">Difference?</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Don't wait to get involved. Contact us today to learn how you can help transform lives in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/volunteer">
              <Button variant="hero" size="lg">
                Get Involved Today
              </Button>
            </a>
            <a href="/programs">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Our Programs
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

export default Contact