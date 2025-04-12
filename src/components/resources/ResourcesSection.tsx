import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Video, FileText, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "article" | "video" | "guide" | "link";
  url: string;
}

interface ResourcesSectionProps {
  resources?: Resource[];
}

const defaultResources: Resource[] = [
  {
    id: "1",
    title: "Understanding Exercise During Cancer Treatment",
    description:
      "A comprehensive guide to staying active during your cancer journey.",
    type: "article",
    url: "/resources/exercise-during-treatment",
  },
  {
    id: "2",
    title: "Guided Meditation Sessions",
    description:
      "Collection of meditation videos for stress relief and mental wellness.",
    type: "video",
    url: "#",
  },
  {
    id: "3",
    title: "Nutrition Guidelines",
    description:
      "Expert advice on maintaining proper nutrition during treatment.",
    type: "guide",
    url: "#",
  },
];

const ResourcesSection = ({
  resources = defaultResources,
}: ResourcesSectionProps) => {
  const getIcon = (type: Resource["type"]) => {
    switch (type) {
      case "article":
        return <Book className="w-6 h-6 text-blue-500" />;
      case "video":
        return <Video className="w-6 h-6 text-blue-500" />;
      case "guide":
        return <FileText className="w-6 h-6 text-blue-500" />;
      case "link":
        return <LinkIcon className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Helpful Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access our collection of articles, videos, and guides to support
            your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card
              key={resource.id}
              className="bg-white hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {getIcon(resource.type)}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {resource.description}
                    </p>
                    <Link
                      to={resource.url}
                      className="text-blue-500 hover:text-blue-600 text-sm font-medium inline-flex items-center gap-1"
                    >
                      Learn more
                      <LinkIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
