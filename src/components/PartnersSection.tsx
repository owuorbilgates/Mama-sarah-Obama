import { Card } from "@/components/ui/card";


import firstPartner from "@/assets/programms/impaakt_valuelogic.jpg";
import secondPartner from "@/assets/programms/idap_partner_logo.jpg";
import thirdPartner from "@/assets/programms/siaya_community_library.jpg";
import fourthPartner from "@/assets/programms/Siaya county logo.jpeg";
import fifthPartner from "@/assets/programms/Coat_of_arms_of_Kenya_(Official).svg.png";
import sixthPartner from "@/assets/programms/USAID-Identity.svg.png";
import seventhPartner from "@/assets/programms/ceeii.png";
import eighthPartner from "@/assets/programms/hellenic-spirit-logo1-e1482355908178.jpg";
import ninthPartner from "@/assets/programms/2022-05-31-8-300x184.png";

const PartnersSection = () => {
  const partners = [
    { name: "Impaakt Valuelogic", logo: firstPartner, website: "https://www.impaaktvaluelogic.co.ke" },
    { name: "IDAP", logo: secondPartner, website: "https://idapglobal.org" },
    { name: "Siaya Community Library", logo: thirdPartner, website: "https://www.siayacommunitylibrary.org" },
    { name: "Siaya County Government", logo: fourthPartner, website: "https://siaya.go.ke/siaya" },
    { name: "National Government of Kenya", logo: fifthPartner, website: "" },
    { name: "USAID", logo: sixthPartner, website: "https://usaid.gov" },
    { name: "CEEII", logo: seventhPartner, website: "https://ceeii.org/" },
    { name: "Hellenic Spirit", logo: eighthPartner, website: "https://hellenicspirit.org/" },
    { name: "Popular European Party", logo: ninthPartner, website: "" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are proud to work with organizations that share our mission to empower children and communities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-card border border-border group cursor-pointer"
            >
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
                aria-label={`Visit ${partner.name} website`}
              >
                <div className="flex items-center justify-center h-20">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
