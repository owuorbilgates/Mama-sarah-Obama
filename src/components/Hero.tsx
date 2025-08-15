import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, X } from "lucide-react"
import heroImage from "@/assets/programms/feeding.jpg"

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false)

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
              Empowering vulnerable children, youth, and, Women in Kenya through education, healthcare, and sustainable development programs.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 mb-12">
            <a href="/donate">
              <Button variant="hero" size="xl" className="group">
                Make a Donation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button
              variant="outline"
              size="xl"
              className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20"
              onClick={() => setShowVideo(true)}
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Our Story
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="animate-scale-in grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">25000+</div>
              <div className="text-white/80 text-sm sm:text-base">Children Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">2000+</div>
              <div className="text-white/80 text-sm sm:text-base">Women Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-white/80 text-sm sm:text-base">Years of Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">47</div>
              <div className="text-white/80 text-sm sm:text-base">Counties Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-primary/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-accent-strong/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: "1s" }} />

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dyEz28OnuW4?autoplay=1"
              title="Watch Our Story"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={() => setShowVideo(false)}
            >
              <X className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
