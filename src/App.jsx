import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProgramResults from "./pages/ProgramResults";
import Students from "./components/StudentCard";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#ebe3c3]">
      <Router>
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program-results" element={<ProgramResults />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}