import React, { useState, useEffect } from "react";
import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/aboutImage.jpg";
import EnergyElectrical from "@/assets/EnergyElectrical.jpg";
import Hybrid from "@/assets/Hybrid.jpg";
import MoneyAdvice from "@/assets/MoneyAdvice.jpg";

const heroImages = [
  { src: aboutImage, alt: "Psytech Consulting Team" },
  { src: EnergyElectrical, alt: "Energy Electrical Project" },
  { src: Hybrid, alt: "Hybrid Power Systems" },
  { src: MoneyAdvice, alt: "Investment Advisory" },
];

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Technical Excellence",
      description:
        "We combine deep technical expertise with innovative solutions to solve complex energy challenges.",
    },
    {
      icon: Eye,
      title: "Forward Vision",
      description:
        "Our forward-looking approach helps clients navigate the evolving energy landscape with confidence.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "We deliver bankable and impactful solutions that drive real change in the energy sector.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description:
        "We work closely with stakeholders to ensure our solutions align with their specific needs and goals.",
    },
  ];

  const galleryImages = [
    {
      src: EnergyElectrical,
      alt: "Energy Electrical Project",
      caption: "Energy Electrical Solutions",
    },
    {
      src: Hybrid,
      alt: "Hybrid Project",
      caption: "Hybrid Power Systems",
    },
    {
      src: MoneyAdvice,
      alt: "Investment Advisory",
      caption: "Investment & Financial Advisory",
    },
  ];

  // Hero image carousel state
  const [currentHero, setCurrentHero] = useState(0);
  const [zoom, setZoom] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoom(false);
      setTimeout(() => {
        setCurrentHero((prev) => (prev + 1) % heroImages.length);
        setZoom(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold text-primary">
                About Psytech Consulting
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are a forward-looking energy consulting company dedicated to
                advancing sustainable, efficient, and reliable power systems.
                Our core expertise spans policy and regulatory advisory,
                feasibility studies, power systems analysis, and smart grid
                solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help governments, utilities, investors, and developers unlock
                opportunities in the clean energy transition by combining
                technical rigor, innovation, and practical implementation
                strategies.
              </p>
            </div>
            <div className="relative h-80 flex items-center justify-center overflow-hidden rounded-lg shadow-elegant">
              <img
                src={heroImages[currentHero].src}
                alt={heroImages[currentHero].alt}
                className={`w-full h-80 object-cover rounded-lg transition-transform duration-1000 ${
                  zoom ? "scale-110" : "scale-100"
                }`}
                style={{ willChange: "transform" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="mb-6 text-primary text-2xl font-bold">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the gap between policy, technology, and
                  investment—empowering stakeholders to accelerate access to
                  affordable, reliable, and sustainable energy. We strive to
                  create enabling environments for clean energy growth while
                  delivering practical, bankable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="mb-6 text-secondary text-2xl font-bold">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading energy consulting firm in Africa, recognized
                  for our expertise in sustainable energy solutions, smart grid
                  technologies, and policy development. We envision a future
                  where clean, reliable energy is accessible to all communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold text-primary">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and define how we
              approach each project and partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-elegant transition-smooth"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-smooth"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl font-extrabold text-primary tracking-tight drop-shadow-lg">
              Company Profile
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our expertise and approach to transforming Africa's
              energy landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <Card className="shadow-xl border-2 border-primary/10 bg-white/90 hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block bg-gradient-to-br from-primary to-secondary rounded-full p-3">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M12 2v20M2 12h20"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold text-primary">
                    Our Expertise
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Psytech Consulting Ltd brings together a team of experienced
                  professionals with deep expertise in energy policy, renewable
                  energy technologies, power systems engineering, and smart grid
                  solutions.
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&#10003;</span>
                    <span>Policy and regulatory framework development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&#10003;</span>
                    <span>Solar and hybrid project feasibility studies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&#10003;</span>
                    <span>Power systems and grid interconnection analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&#10003;</span>
                    <span>Smart grid and digital utility solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&#10003;</span>
                    <span>Energy access planning and strategy development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&#10003;</span>
                    <span>Investment advisory and risk analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 border-secondary/10 bg-white/90 hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-gradient-to-br from-secondary to-primary rounded-full p-2">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#fff"
                        strokeWidth="2"
                      />
                      <path
                        d="M8 12l2 2 4-4"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold text-secondary">
                    Our Approach
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We believe in a collaborative approach that combines technical
                  excellence with practical implementation. Our solutions are
                  designed to be both technically sound and commercially viable,
                  ensuring that our clients can achieve their energy goals while
                  maintaining financial sustainability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
