import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users } from "lucide-react"

const CallToAction = () => {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#E0010C" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Be Part of the <span className="text-primary-glow">Change</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Join us in transforming lives and building stronger communities. Your support makes a real difference in the lives of vulnerable children across Kenya.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Donate Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Make a Donation</h3>
                <p className="text-white/80 leading-relaxed">
                  Your donation directly supports our education, healthcare, and community development programs.
                </p>
              </div>
              <a href="/donate">
              <Button variant="hero" size="lg" className="w-full group/btn">
                Donate Now
                <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </a>
            </div>

            {/* Volunteer Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Volunteer With Us</h3>
                <p className="text-white/80 leading-relaxed">
                  Join our team of dedicated volunteers and contribute your skills to make a lasting impact.
                </p>
              </div>
              <a href="/volunteer">
              <Button variant="outline" size="lg" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 group/btn">
                Get Involved
                <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-white/80 mb-4">
              Have questions? Want to learn more about our programs?
            </p>
            <a href="/contact">
            <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/30">
              Contact Us Today
            </Button>
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction