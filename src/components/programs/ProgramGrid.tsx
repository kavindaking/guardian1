import React from "react";
import ProgramCard from "./ProgramCard";
import { motion } from "framer-motion";

interface Program {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  equipment: string[];
  imageUrl: string;
}

interface ProgramGridProps {
  programs?: Program[];
  onProgramClick?: (programId: string) => void;
}

const defaultPrograms: Program[] = [
  {
    id: "1",
    title: "Gentle Recovery Yoga",
    description:
      "A low-impact program designed to help maintain flexibility and strength during treatment.",
    difficulty: "Beginner",
    duration: "30 mins",
    equipment: ["Yoga Mat", "Light Weights"],
    imageUrl:
      "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: "2",
    title: "Cardio Endurance",
    description:
      "Build stamina and energy with this adaptable cardio workout program.",
    difficulty: "Intermediate",
    duration: "45 mins",
    equipment: ["Resistance Bands", "Exercise Ball"],
    imageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: "3",
    title: "Strength Training",
    description:
      "Focus on building muscle and bone density with guided resistance training.",
    difficulty: "Advanced",
    duration: "60 mins",
    equipment: ["Dumbbells", "Resistance Bands", "Bench"],
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920",
  },
];

const ProgramGrid = ({
  programs = defaultPrograms,
  onProgramClick = (id) => console.log(`Program ${id} clicked`),
}: ProgramGridProps) => {
  return (
    <div className="w-full bg-gray-50 p-6">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {programs.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProgramCard
              title={program.title}
              description={program.description}
              difficulty={program.difficulty}
              duration={program.duration}
              equipment={program.equipment}
              imageUrl={program.imageUrl}
              onClick={() => onProgramClick(program.id)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProgramGrid;
