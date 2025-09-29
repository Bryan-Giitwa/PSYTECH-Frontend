import React from "react";
import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-team.jpg";

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

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">About Psytech Consulting</h1>
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
            <div className="relative">
              <img
                src={aboutImage}
                alt="Psytech Consulting Team"
                className="rounded-lg shadow-elegant w-full"
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
                <h2 className="mb-6 text-primary">Our Mission</h2>
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
                <h2 className="mb-6 text-secondary">Our Vision</h2>
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
            <h2 className="mb-4">Our Values</h2>
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
                    <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Company Profile */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6">Company Profile</h2>
          </div>

          <div className="space-y-8">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Our Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Psytech Consulting Ltd brings together a team of experienced
                  professionals with deep expertise in energy policy, renewable
                  energy technologies, power systems engineering, and smart grid
                  solutions.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Policy and regulatory framework development</li>
                  <li>Solar and hybrid project feasibility studies</li>
                  <li>Power systems and grid interconnection analysis</li>
                  <li>Smart grid and digital utility solutions</li>
                  <li>Energy access planning and strategy development</li>
                  <li>Investment advisory and risk analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-secondary">
                  Our Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
