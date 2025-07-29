import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import heroImage from "@/assets/hero-children.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Children learning and playing together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nurturing{" "}
              <span className="text-primary">Future</span>{" "}
              Generations
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Empowering vulnerable children, orphans, and communities in Kenya through education, healthcare, and sustainable development programs.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="xl" className="group">
              Make a Donation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20">
              <Play className="h-5 w-5 mr-2" />
              Watch Our Story
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="animate-scale-in grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-white/80 text-sm sm:text-base">Children Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-white/80 text-sm sm:text-base">Years of Impact</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">3</div>
              <div className="text-white/80 text-sm sm:text-base">Counties Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-primary/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-accent-strong/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: "1s" }} />
    </section>
  )
}

export default Hero