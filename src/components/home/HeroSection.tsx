import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onFindProgramClick?: () => void;
}

const HeroSection = ({
  title = "Your Journey to Wellness Starts Here",
  subtitle = "Discover personalized exercise programs designed specifically for cancer patients and survivors.",
  imageUrl = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1920",
  onFindProgramClick = () => console.log("Find Program clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[600px] bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100" />
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center h-full text-center mx-auto max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-8"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg"
              onClick={onFindProgramClick}
            >
              Find Your Program
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
