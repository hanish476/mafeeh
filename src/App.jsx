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

      {/* Semi-circular gradient at the bottom */}
      <div className="h-30">
        <div 
        className="absolute -z-50 bottom-0 left-0 right-0  h-88"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(57, 45, 2, 0.9) 10%, rgba(57, 45, 2, 0) 70%)',
          zIndex: 0,
        }}
      ></div>
      </div>
    </div>
  );
}