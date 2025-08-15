import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin } from "lucide-react"

import mamaSarah from "@/assets/programms/mama-sarah-02.jpg";
import marsatOnyango from "@/assets/programms/MARSAT-OSUMBA-ONYANGO-768x703.jpg";
import saidObama from "@/assets/programms/saidit.jpg";
import johnMalamba from "@/assets/programms/JOHN-A.-MALAMBA.jpg";
import naomiOketch from "@/assets/programms/WhatsApp Image 2025-08-11 at 12.45.15_1e01f543.jpg";
import paulSaoke from "@/assets/programms/saoke.jpg";
import bilgatesOwuor from "@/assets/programms/bilgates.jpg";

const Team = () => {
  const boardMembers = [
    {
      name: "The late Dr. Mama Sarah Obama",
      title: "Founder & Patron",
      bio: "The grandmother of former U.S. President Barack Obama, Mama Sarah has dedicated her life to improving education and healthcare for children in Kenya.",
      quote: "Every child deserves the opportunity to live a healthy and productive life.",
      image: mamaSarah
    },
    {
      name:"Marsat Onyango Obama",
      title:"Co-founder & Chairperson",
      bio:"Marsat is a dedicated humanitarian and agricultural advocate, committed to ensuring orphans, vulnerable children, and widows in Kenya have access to education, nourishment, and sustainable livelihoods",
      quote:"When a child is fed, educated, and loved, the whole community thrives.",
      image:marsatOnyango
    },
    {
      name: "Said Obama",
      title: "Board Treasurer",
      bio: "A committed public servant and civil society advocate with over 15 years of experience advancing civic education, human rights, and community development in Kenya.",
      quote: "Empowered citizens are the foundation of a just and compassionate society.",
      image: saidObama
    },
    {
      name: "John A. Malamba",
      title: "Programmes Director",
      bio: "A seasoned community development leader with over 20 years of experience driving grassroots impact and educational access across Kenya.",
      quote: "Strong communities are built through knowledge, connection, and a shared commitment to progress.",
      image: johnMalamba
    },
    {
      name: "Naomi Oketch",
      title: "Executive Director",
      bio: "A visionary executive leader specializing in resource mobilization, strategic growth, and sustainable community impact.",
      quote: "True leadership transforms opportunity into action by engaging communities, aligning resources, and daring to reimagine what’s possible",
      image: naomiOketch
    },
    {
      name: "Dr.Paul O. Saoke",
      title: "Board Member",
      bio: "A dynamic communications and development expert with 20 years of experience spanning communications, fundraising, program management, and technology innovation.",
      quote: "Empowering communities begins with clear communication, purpose-driven action, and the courage to innovate.",
      image: paulSaoke
    },    
    {
      name: "Bilgates Owuor",
      title: "Software Engineer & IT Specialist",
      bio: "A proficient software engineer with deep expertise in designing and deploying scalable digital solutions for enterprise and community impact.",
      quote: "Great software solves problems—it’s not just code, it’s a tool that transforms ideas into positive community change.",
      image: bilgatesOwuor
    }


  ]

  const leadership = [
    {
      name: "Peter Otieno",
      title: "Executive Director",
      bio: "Peter leads the foundation's strategic initiatives and oversees program implementation across all our service areas.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mary Wanjiku",
      title: "Program Director",
      bio: "Mary coordinates our education, healthcare, and community development programs with local partners and beneficiaries.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Samuel Kiprotich",
      title: "Operations Manager",
      bio: "Samuel ensures efficient operations and logistics for our programs across multiple counties in Kenya.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    }
  ]

  const staff = [
    {
      name: "Faith Nyokabi",
      title: "Education Coordinator",
      bio: "Faith manages our child sponsorship programs and works directly with schools and families.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Daniel Ouma",
      title: "Health Program Officer",
      bio: "Daniel coordinates our healthcare initiatives and community health education programs.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Rebecca Mutindi",
      title: "Community Outreach Officer",
      bio: "Rebecca leads our community engagement efforts and volunteer coordination activities.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Joseph Wekesa",
      title: "Project Coordinator",
      bio: "Joseph oversees water access projects and infrastructure development in rural communities.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    }
  ]

  const TeamSection = ({ title, members, showQuote = false }: { title: string, members: any[], showQuote?: boolean }) => (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <Card 
              key={member.name}
              className="group hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden shadow-soft group-hover:shadow-warm transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  
                  {showQuote && member.quote && (
                    <blockquote className="mt-4 text-sm italic text-foreground border-l-2 border-primary pl-4">
                      "{member.quote}"
                    </blockquote>
                  )}
                </div>
                
                <div className="flex justify-center space-x-3 pt-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                    <Linkedin className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "#4ADE80" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-primary-glow">Team</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Dedicated individuals working together to transform lives and build stronger communities across Kenya through compassionate service and sustainable programs.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 lg:py-24 bg-trust-gradient">
        <TeamSection title="Our Team" members={boardMembers} showQuote={true} />
      </section>

      {/* Leadership Team */}
      {/*<TeamSection title="Leadership Team" members={leadership} />*/}

      {/* Staff Members */}
      {/*<section className="py-16 lg:py-24 bg-trust-gradient">
        <TeamSection title="Our Staff" members={staff} />
      </section>*/}

      {/* Join Our Team */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#D90F12" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-primary-glow">Mission</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              We're always looking for passionate individuals who share our commitment to improving the lives of vulnerable children and communities. Whether through volunteering, partnerships, or full-time positions, there are many ways to be part of our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Volunteer Opportunities
              </button>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Team