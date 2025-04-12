import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ArticlePage from "./components/resources/ArticlePage";
import ProgramSection from "./components/programs/ProgramSection";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<ProgramSection />} />
        <Route
          path="/resources/exercise-during-treatment"
          element={<ArticlePage />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
