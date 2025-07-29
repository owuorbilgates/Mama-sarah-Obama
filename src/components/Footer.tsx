import { Button } from "@/components/ui/button"
import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-foundation-trust text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/src/assets/logo-1-preview-min.png"
                alt="Mama Sarah Obama Children Foundation Logo"
                className="w-25 h-14 object-contain"
              />
              
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nurturing future generations through education, healthcare, and community development in Kenya since 2009.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Our Work", href: "/our-work" },
                { name: "About Us", href: "/about" },
                { name: "Get Involved", href: "/get-involved" },
                { name: "Success Stories", href: "/stories" },
                { name: "Events", href: "/events" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {[
                "Education Support",
                "Healthcare Services",
                "Clean Water Access",
                "Nutrition Programs",
                "Community Development",
              ].map((program) => (
                <li key={program}>
                  <span className="text-muted-foreground text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Siaya, Kisumu & Homa Bay</p>
                  <p>Counties, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+254 xxx xxx xxx</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@obamachildren.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
            <p className="text-muted-foreground mb-4">
              Get updates on our impact and upcoming events
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Mama Sarah Obama Children Foundation. All rights reserved.| Built with ❤ <a href="https://creativeminds.ct.ws">Creative Minds</a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer