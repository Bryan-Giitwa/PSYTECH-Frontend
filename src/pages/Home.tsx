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
import { motion } from "framer-motion";
import ReguratoryAdvice from "@/assets/ReguratoryAdvice.jpg";
import SolarPower from "@/assets/SolarPower.jpeg";
import PowerGrid from "@/assets/PowerGrid.jpeg";
import SmatGrid from "@/assets/SmatGrid.jpg";
import EnergyAccess from "@/assets/EnergyAccess.jpeg";
import InvestmentAdvisory from "@/assets/InvestmentAdvisory.jpeg";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const typewriter = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const flipIn = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.7 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const pulse = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: [1, 1.05, 1],
    transition: { duration: 0.8, times: [0, 0.5, 1] },
  },
};

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: "Policy & Regulatory Advisory",
      description:
        "We help governments, regulators, and institutions design sound policies and regulatory frameworks that create an enabling environment for sustainable energy growth.",
      image: ReguratoryAdvice,
    },
    {
      icon: FileText,
      title: "Feasibility Studies (Solar & Hybrid Projects)",
      description:
        "Our team delivers in-depth technical and financial feasibility assessments to ensure solar and hybrid energy projects are practical, bankable, and impactful.",
      image: SolarPower,
    },
    {
      icon: Network,
      title: "Power Systems & Grid Interconnection Studies",
      description:
        "We conduct advanced grid analysis—load flow, stability, and interconnection studies—to ensure safe and reliable integration of renewable energy into existing networks.",
      image: PowerGrid,
    },
    {
      icon: Zap,
      title: "Smart Grid & Smart Utility Management",
      description:
        "From smart metering to digital utility operations, we design solutions that modernize utilities, improve efficiency, and enable smarter energy management.",
      image: SmatGrid,
    },
    {
      icon: Users,
      title: "Energy Access & Planning",
      description:
        "We support national and county governments in developing clean energy access plans and strategies that expand opportunities for communities and investors alike.",
      image: EnergyAccess,
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description:
        "We provide investors and developers with tailored advisory, from risk analysis to investment prospectuses, unlocking opportunities in the renewable energy market.",
      image: InvestmentAdvisory,
    },
  ];

  // Helper for typewriter effect
  const Typewriter = ({
    text,
    className,
  }: {
    text: string;
    className?: string;
  }) => (
    <motion.h2
      className={className}
      variants={typewriter}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );

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
          <motion.h1
            className="text-white mb-6 flex flex-wrap justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.18, delayChildren: 0.1 },
              },
            }}
          >
            {["Advancing", "Sustainable", "Energy", "Solutions"].map(
              (word, i) => (
                <motion.span
                  key={i}
                  className="mx-2 inline-block"
                  variants={{
                    hidden: { opacity: 0, y: -40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease: "easeOut" },
                    },
                  }}
                >
                  {word}
                </motion.span>
              )
            )}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            We are a forward-looking energy consulting company dedicated to
            advancing sustainable, efficient, and reliable power systems across
            Africa and beyond.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.4 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typewriter
            text="PSYTECH CONSULTING LTD"
            className="mb-8 text-5xl font-bold text-gray-900"
          />
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            To bridge the gap between policy, technology, and investment
            empowering stakeholders to accelerate access to affordable,
            reliable, and sustainable energy. We help governments, utilities,
            investors, and developers unlock opportunities in the clean energy
            transition.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-2"
              variants={flipIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.2 }}
            >
              We combine technical rigor, innovation, and practical
              implementation strategies to deliver solutions that are both
              bankable and impactful.
            </motion.p>
          </div>

          <div className="flex flex-col gap-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              const slideVariant = isEven ? slideLeft : slideRight;

              return (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row ${
                    isEven ? "" : "md:flex-row-reverse"
                  } items-center gap-10`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.7 }}
                >
                  {/* Circular Image Container */}
                  <div className="relative flex-shrink-0">
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

                  {/* Content */}
                  <motion.div
                    className={`max-w-md ${
                      isEven ? "md:text-left" : "md:text-right"
                    } text-left`}
                    variants={slideVariant}
                  >
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        isEven ? "" : "md:justify-end"
                      }`}
                    >
                      <motion.h3
                        className="text-2xl font-bold text-gray-900"
                        variants={fadeUp}
                      >
                        {service.title}
                      </motion.h3>
                    </div>
                    <motion.p
                      className="text-gray-600 leading-relaxed text-base"
                      variants={fadeUp}
                      transition={{ delay: 0.2 }}
                    >
                      {service.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-white mb-6"
            variants={pulse}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            Ready to Transform Your Energy Future?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            From shaping enabling energy policies to optimizing utility
            operations with smart grid technologies, we deliver comprehensive
            energy consulting solutions.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
