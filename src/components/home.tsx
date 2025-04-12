import React from "react";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import HeroSection from "./home/HeroSection";
import ProgramSection from "./programs/ProgramSection";
import ResourcesSection from "./resources/ResourcesSection";
import { motion } from "framer-motion";

interface HomeProps {
  isLoggedIn?: boolean;
  userName?: string;
  userAvatar?: string;
  onLoginClick?: () => void;
  onProfileClick?: () => void;
  onFindProgramClick?: () => void;
  onProgramSelect?: (programId: string) => void;
}

const Home = ({
  isLoggedIn = false,
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  onLoginClick = () => console.log("Login clicked"),
  onProfileClick = () => console.log("Profile clicked"),
  onFindProgramClick = () => console.log("Find Program clicked"),
  onProgramSelect = (id) => console.log(`Program ${id} selected`),
}: HomeProps) => {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header
        isLoggedIn={isLoggedIn}
        userName={userName}
        userAvatar={userAvatar}
        onLoginClick={onLoginClick}
        onProfileClick={onProfileClick}
      />

      <main>
        <HeroSection onFindProgramClick={onFindProgramClick} />
        <ProgramSection onProgramSelect={onProgramSelect} />
        <ResourcesSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;
