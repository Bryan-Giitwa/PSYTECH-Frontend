import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1 flex flex-col items-start">
            <img
              // src={logoBackround}
              src={logo}
              alt="Psytech Consulting Logo"
              className="mb-4 w-20 h-20 object-contain rounded-lg shadow"
            />
            <h3 className="text-xl font-bold mb-4">PSYTECH CONSULTING LTD</h3>
            <p className="text-primary-foreground/80 mb-4">
              Forward-looking energy consulting company dedicated to advancing
              sustainable, efficient, and reliable power systems.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Policy & Regulatory Advisory</li>
              <li>Feasibility Studies</li>
              <li>Power Systems Studies</li>
              <li>Smart Grid Solutions</li>
              <li>Energy Access Planning</li>
              <li>Investment Advisory</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a
                  href="/"
                  className="hover:text-primary-foreground transition-smooth"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-primary-foreground transition-smooth"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-primary-foreground transition-smooth"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary-foreground transition-smooth"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <div>
                  <p>0791782123</p>
                  <p>0728397895</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <p>Consulting@psytech.co.ke</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/70">
          <p>
            &copy; {new Date().getFullYear()} Psytech Consulting Ltd. All rights
            reserved.
            <br />
            <span className="block mt-2 text-xs text-primary-foreground/60">
              Crafted with energy & innovation.{" "}
              <span aria-label="lightning" role="img">
                ⚡
              </span>{" "}
              Powered by{" "}
              <a
                href="https://biznapages.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary-foreground"
              >
                BiznaPages
              </a>{" "}
              — fueling digital excellence.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
