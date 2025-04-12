import React, { useState } from "react";
import FilterBar from "./FilterBar";
import ProgramGrid from "./ProgramGrid";
import { motion } from "framer-motion";

interface FilterState {
  treatmentType: string[];
  fitnessLevel: string[];
  exerciseCategory: string[];
}

interface Program {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  equipment: string[];
  imageUrl: string;
}

interface ProgramSectionProps {
  initialPrograms?: Program[];
  onProgramSelect?: (programId: string) => void;
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

const ProgramSection = ({
  initialPrograms = defaultPrograms,
  onProgramSelect = (id) => console.log(`Program ${id} selected`),
}: ProgramSectionProps) => {
  const [filters, setFilters] = useState<FilterState>({
    treatmentType: [],
    fitnessLevel: [],
    exerciseCategory: [],
  });

  const [filteredPrograms, setFilteredPrograms] =
    useState<Program[]>(initialPrograms);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);

    // Apply filters to programs
    const filtered = initialPrograms.filter((program) => {
      if (
        newFilters.fitnessLevel.length > 0 &&
        !newFilters.fitnessLevel.includes(program.difficulty)
      ) {
        return false;
      }
      // Additional filter logic would go here for treatment type and exercise category
      return true;
    });

    setFilteredPrograms(filtered);
  };

  return (
    <motion.section
      className="w-full bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <FilterBar
          onFilterChange={handleFilterChange}
          selectedFilters={filters}
        />
        <div>
          <ProgramGrid
            programs={filteredPrograms}
            onProgramClick={onProgramSelect}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ProgramSection;
