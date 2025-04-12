import React from "react";
import { Link } from "react-router-dom";
import { Dumbbell, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-6 h-6 text-blue-300" />
              <span className="text-xl font-semibold">Guardian</span>
            </div>
            <p className="text-sm text-blue-200">
              Empowering cancer patients through personalized exercise programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link
                  to="/programs"
                  className="hover:text-white transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-3">Programs</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link
                  to="/programs?level=beginner"
                  className="hover:text-white transition-colors"
                >
                  Beginner Workouts
                </Link>
              </li>
              <li>
                <Link
                  to="/programs?type=recovery"
                  className="hover:text-white transition-colors"
                >
                  Recovery Sessions
                </Link>
              </li>
              <li>
                <Link
                  to="/programs?type=strength"
                  className="hover:text-white transition-colors"
                >
                  Strength Training
                </Link>
              </li>
              <li>
                <Link
                  to="/programs?type=wellness"
                  className="hover:text-white transition-colors"
                >
                  Wellness Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-3">Connect With Us</h3>
            <div className="flex space-x-4 mb-3">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-blue-200">
              Contact us: support@guardian.com
            </p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-6 pt-6 text-sm text-blue-200 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Guardian. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
