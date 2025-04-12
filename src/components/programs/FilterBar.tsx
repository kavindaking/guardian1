import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";
import { Dumbbell, Clock, Activity, Target } from "lucide-react";

interface FilterBarProps {
  onFilterChange?: (filters: FilterState) => void;
  selectedFilters?: FilterState;
}

interface FilterState {
  treatmentType: string[];
  fitnessLevel: string[];
  exerciseCategory: string[];
}

const FilterBar = ({
  onFilterChange = () => {},
  selectedFilters = {
    treatmentType: [],
    fitnessLevel: [],
    exerciseCategory: [],
  },
}: FilterBarProps) => {
  const treatmentTypes = ["Chemotherapy", "Radiation", "Surgery", "Recovery"];
  const fitnessLevels = ["Beginner", "Intermediate", "Advanced"];
  const exerciseCategories = ["Strength", "Cardio", "Flexibility", "Balance"];

  const handleFilterChange = (category: keyof FilterState, value: string) => {
    const updatedFilters = { ...selectedFilters };
    if (updatedFilters[category].includes(value)) {
      updatedFilters[category] = updatedFilters[category].filter(
        (item) => item !== value,
      );
    } else {
      updatedFilters[category] = [...updatedFilters[category], value];
    }
    onFilterChange(updatedFilters);
  };

  return (
    <div className="w-full p-4 bg-white border-b">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          {/* Treatment Type Filters */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Activity className="w-4 h-4" />
              <span>Treatment Type</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {treatmentTypes.map((type) => (
                <Toggle
                  key={type}
                  pressed={selectedFilters.treatmentType.includes(type)}
                  onPressedChange={() =>
                    handleFilterChange("treatmentType", type)
                  }
                  variant="outline"
                  size="sm"
                >
                  {type}
                </Toggle>
              ))}
            </div>
          </div>

          <Separator orientation="vertical" className="h-10 hidden sm:block" />

          {/* Fitness Level Filters */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Target className="w-4 h-4" />
              <span>Fitness Level</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {fitnessLevels.map((level) => (
                <Toggle
                  key={level}
                  pressed={selectedFilters.fitnessLevel.includes(level)}
                  onPressedChange={() =>
                    handleFilterChange("fitnessLevel", level)
                  }
                  variant="outline"
                  size="sm"
                >
                  {level}
                </Toggle>
              ))}
            </div>
          </div>

          <Separator orientation="vertical" className="h-10 hidden sm:block" />

          {/* Exercise Category Filters */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Dumbbell className="w-4 h-4" />
              <span>Exercise Type</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {exerciseCategories.map((category) => (
                <Toggle
                  key={category}
                  pressed={selectedFilters.exerciseCategory.includes(category)}
                  onPressedChange={() =>
                    handleFilterChange("exerciseCategory", category)
                  }
                  variant="outline"
                  size="sm"
                >
                  {category}
                </Toggle>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
