import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Our Work", href: "/our-work" },
    { name: "About Us", href: "/about" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Team", href: "/team" },
    { name: "Programs", href: "/programs" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              
            </div>
            <div className="flex flex-col">
            <img
                src="/src/assets/logo-1-preview-min.png"
                alt="Mama Sarah Obama Children Foundation"
                className="w-25 h-12 object-contain"
                style={{ display: "block" }}
                
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="volunteer" size="sm">
              Volunteer
            </Button>
            <Button variant="donate" size="sm" style={{ backgroundColor: "#E0010C" }}>
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2 shadow-card animate-fade-in-up">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="volunteer" size="sm" className="w-full">
                  Volunteer
                </Button>
                <Button variant="donate" size="sm" className="w-full">
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header