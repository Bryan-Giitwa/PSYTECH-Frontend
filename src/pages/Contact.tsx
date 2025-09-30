import React from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["0791782123", "0728397895"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["Consulting@psytech.co.ke"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Kenya"],
    },
    // {
    //   icon: Clock,
    //   title: "Business Hours",
    //   details: [
    //     "Monday - Friday: 8:00 AM - 6:00 PM",
    //     "Saturday: 9:00 AM - 2:00 PM",
    //   ],
    // },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to advance your energy project? Get in touch with our expert
            team for professional energy consulting services.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8">Get In Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to help you navigate the clean energy transition.
                Whether you need policy advisory, feasibility studies, or smart
                grid solutions, our team is ready to support your energy goals.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <div className="space-y-1">
                              {item.details.map((detail, detailIndex) => (
                                <p
                                  key={detailIndex}
                                  className="text-muted-foreground"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your project and how we can help you achieve
                    your energy goals.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <select className="w-full p-3 border border-input rounded-md bg-background text-foreground">
                      <option value="">Select a service</option>
                      <option value="policy">
                        Policy & Regulatory Advisory
                      </option>
                      <option value="feasibility">Feasibility Studies</option>
                      <option value="power-systems">
                        Power Systems & Grid Studies
                      </option>
                      <option value="smart-grid">Smart Grid Solutions</option>
                      <option value="energy-access">
                        Energy Access & Planning
                      </option>
                      <option value="investment">Investment Advisory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and how we can help..."
                      className="min-h-32"
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Transform Energy Systems?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            From policy development to technical implementation, we're your
            trusted partner in the clean energy transition. Let's build a
            sustainable energy future together.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Call Us Directly
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Speak with our experts about your project requirements
                </p>
                <div className="space-y-1">
                  <p className="text-white">0791782123</p>
                  <p className="text-white">0728397895</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-white/90 text-sm mb-4">
                  Send us detailed information about your energy project
                </p>
                <p className="text-white">Consulting@psytech.co.ke</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
