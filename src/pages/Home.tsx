import React from "react";
import { ArrowRight, Zap, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-energy.jpg";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Smart Grid Solutions",
      description:
        "Advanced smart grid and utility management technologies for modern energy systems.",
    },
    {
      icon: Shield,
      title: "Policy & Regulatory",
      description:
        "Expert advisory services for sustainable energy policies and regulatory frameworks.",
    },
    {
      icon: TrendingUp,
      title: "Feasibility Studies",
      description:
        "Comprehensive technical and financial analysis for solar and hybrid projects.",
    },
    {
      icon: Users,
      title: "Investment Advisory",
      description:
        "Strategic guidance for investors and developers in renewable energy markets.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
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
              className="border-white text-white hover:bg-white/10"
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

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Psytech Consulting</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine technical rigor, innovation, and practical
              implementation strategies to deliver solutions that are both
              bankable and impactful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-elegant transition-smooth"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
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
