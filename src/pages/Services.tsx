import React from "react";
import {
  FileText,
  BarChart3,
  Zap,
  Cpu,
  MapPin,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import servicesImage from "@/assets/services-grid.jpg";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Policy & Regulatory Advisory",
      description:
        "We help governments, regulators, and institutions design sound policies and regulatory frameworks that create an enabling environment for sustainable energy growth.",
      features: [
        "Energy policy development and review",
        "Regulatory framework design",
        "Stakeholder consultation and engagement",
        "Policy impact assessment",
        "Compliance and regulatory guidance",
      ],
    },
    {
      icon: BarChart3,
      title: "Feasibility Studies (Solar & Hybrid Projects)",
      description:
        "Our team delivers in-depth technical and financial feasibility assessments to ensure solar and hybrid energy projects are practical, bankable, and impactful.",
      features: [
        "Technical feasibility analysis",
        "Financial modeling and projections",
        "Risk assessment and mitigation",
        "Environmental impact studies",
        "Bankability assessments",
      ],
    },
    {
      icon: Zap,
      title: "Power Systems & Grid Interconnection Studies",
      description:
        "We conduct advanced grid analysis—load flow, stability, and interconnection studies—to ensure safe and reliable integration of renewable energy into existing networks.",
      features: [
        "Load flow analysis",
        "Power system stability studies",
        "Grid interconnection planning",
        "Protection system design",
        "Network optimization",
      ],
    },
    {
      icon: Cpu,
      title: "Smart Grid & Smart Utility Management",
      description:
        "From smart metering to digital utility operations, we design solutions that modernize utilities, improve efficiency, and enable smarter energy management.",
      features: [
        "Smart metering implementation",
        "Advanced metering infrastructure (AMI)",
        "Demand response systems",
        "Grid automation and control",
        "Digital utility transformation",
      ],
    },
    {
      icon: MapPin,
      title: "Energy Access & Planning",
      description:
        "We support national and county governments in developing clean energy access plans and strategies that expand opportunities for communities and investors alike.",
      features: [
        "National energy planning",
        "Rural electrification strategies",
        "Mini-grid development planning",
        "Energy access assessments",
        "Community engagement programs",
      ],
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description:
        "We provide investors and developers with tailored advisory, from risk analysis to investment prospectuses, unlocking opportunities in the renewable energy market.",
      features: [
        "Investment opportunity assessment",
        "Due diligence support",
        "Financial structuring advice",
        "Market analysis and research",
        "Risk management strategies",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${servicesImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive energy consulting services designed to accelerate the
            clean energy transition through technical excellence, innovation,
            and practical implementation strategies.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-elegant transition-smooth"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-3">
                          {service.title}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-primary mb-3">
                        Key Features:
                      </h4>
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-8">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Years of experience in energy consulting with successful project
                implementations across Africa.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation Focus</h3>
              <p className="text-muted-foreground text-sm">
                Cutting-edge solutions that combine the latest technology with
                practical implementation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Bankable Results</h3>
              <p className="text-muted-foreground text-sm">
                Solutions designed to be both technically sound and commercially
                viable for long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Start Your Energy Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our comprehensive energy consulting services can
            help you achieve your sustainable energy goals.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
