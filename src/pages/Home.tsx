import React from "react";
import {
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Users,
  FileText,
  Network,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroEnergy from "@/assets/HeroEnergy.jpg";

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: "Policy & Regulatory Advisory",
      description:
        "We help governments, regulators, and institutions design sound policies and regulatory frameworks that create an enabling environment for sustainable energy growth.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      icon: FileText,
      title: "Feasibility Studies (Solar & Hybrid Projects)",
      description:
        "Our team delivers in-depth technical and financial feasibility assessments to ensure solar and hybrid energy projects are practical, bankable, and impactful.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    },
    {
      icon: Network,
      title: "Power Systems & Grid Interconnection Studies",
      description:
        "We conduct advanced grid analysis—load flow, stability, and interconnection studies—to ensure safe and reliable integration of renewable energy into existing networks.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    },
    {
      icon: Zap,
      title: "Smart Grid & Smart Utility Management",
      description:
        "From smart metering to digital utility operations, we design solutions that modernize utilities, improve efficiency, and enable smarter energy management.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      icon: Users,
      title: "Energy Access & Planning",
      description:
        "We support national and county governments in developing clean energy access plans and strategies that expand opportunities for communities and investors alike.",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description:
        "We provide investors and developers with tailored advisory, from risk analysis to investment prospectuses, unlocking opportunities in the renewable energy market.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroEnergy})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6 animate-fade-in">
            Advancing Sustainable Energy Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We are a forward-looking energy consulting company dedicated to
            advancing sustainable, efficient, and reliable power systems across
            Africa and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-elegant"
              asChild
            >
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-white/10"
              asChild
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-8">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To bridge the gap between policy, technology, and
            investment—empowering stakeholders to accelerate access to
            affordable, reliable, and sustainable energy. We help governments,
            utilities, investors, and developers unlock opportunities in the
            clean energy transition.
          </p>
        </div>
      </section>

      {/* Services Section - Inspired by Screenshot Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical rigor, innovation, and practical
              implementation strategies to deliver solutions that are both
              bankable and impactful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "md:items-start" : "md:items-end"
                  } gap-8`}
                >
                  {/* Circular Image Container */}
                  <div
                    className={`relative w-full flex ${
                      isEven ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className="relative">
                      {/* Outer decorative circle */}
                      <div className="absolute inset-0 rounded-full border-2 border-gray-200 transform scale-110"></div>

                      {/* Image circle */}
                      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`max-w-md ${
                      isEven ? "md:text-left" : "md:text-right"
                    } text-left`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        isEven ? "" : "md:justify-end"
                      }`}
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-base">
                      {service.description}
                    </p>

                    <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                      Read on our efforts
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            From shaping enabling energy policies to optimizing utility
            operations with smart grid technologies, we deliver comprehensive
            energy consulting solutions.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
