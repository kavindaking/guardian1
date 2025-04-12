import React from "react";
import { FileText } from "lucide-react";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";

const ArticlePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 max-w-3xl mx-auto px-4 py-12">
        <div className="flex items-start gap-4 p-6 bg-white rounded-lg">
          <FileText className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <div>
            <h1 className="text-xl font-semibold text-gray-900 mb-2">
              Understanding Exercise During Cancer Treatment
            </h1>
            <p className="text-gray-600">
              A comprehensive guide to staying active during your cancer
              journey.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage;
