import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Dumbbell, ChevronRight } from "lucide-react";

interface ProgramCardProps {
  title?: string;
  description?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  duration?: string;
  equipment?: string[];
  imageUrl?: string;
  onClick?: () => void;
}

const ProgramCard = ({
  title = "Gentle Recovery Yoga",
  description = "A low-impact program designed to help maintain flexibility and strength during treatment.",
  difficulty = "Beginner",
  duration = "30 mins",
  equipment = ["Yoga Mat", "Light Weights"],
  imageUrl = "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=1920",
  onClick = () => console.log("Program card clicked"),
}: ProgramCardProps) => {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  };

  return (
    <Card
      className="w-[380px] h-[320px] overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer bg-white"
      onClick={onClick}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge className={difficultyColors[difficulty]}>{difficulty}</Badge>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-1 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>

      <CardFooter className="px-4 py-3 border-t flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-600">{equipment.join(", ")}</span>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
