import { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Calendar,
  Users,
  Crown,
  Trophy,
  Award,
  Star,
  AlertCircle,
} from "lucide-react";
import { results, students } from "../data";
import { calcScore } from "../utils/calcScores";
import { formatTimeAgo } from "../utils/helper.js";

// Get student name safely
const getStudentName = (studentId) => {
  const student = students.find((s) => s.id === studentId);
  return student ? student.name : "Unknown Student";
};

// Medal icon by position
const getMedalIcon = (position) => {
  switch (position) {
    case 1:
      return <Crown className="h-5 w-5 text-amber-500" />;
    case 2:
      return <Trophy className="h-5 w-5 text-blue-500" />;
    case 3:
      return <Award className="h-5 w-5 text-rose-500" />;
    default:
      return null;
  }
};

// Background class for rank badge
const getPositionBg = (position) => {
  switch (position) {
    case 1:
      return "bg-gradient-to-br from-amber-400 to-amber-600";
    case 2:
      return "bg-gradient-to-br from-blue-400 to-blue-600";
    case 3:
      return "bg-gradient-to-br from-rose-400 to-rose-600";
    default:
      return "bg-slate-400";
  }
};

export default function ResultsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollContainerRef = useRef(null);

  // Sort by latest published
  const latestResults = useMemo(() => {
    return [...results]
      .filter((r) => r.datePublished)
      .sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished))
      .slice(0, 10);
  }, []);

  // Split placements: with position vs only grade
  const filteredResults = latestResults.map((program) => {
    const withPosition = program.placements.filter((p) => p.position);
    const onlyGrades = program.placements.filter((p) => !p.position && p.grade);
    return { ...program, withPosition, onlyGrades };
  });

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredResults.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (filteredResults.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <AlertCircle className="h-10 w-10 text-slate-400 mx-auto mb-3" />
        <h3 className="text-lg font-medium text-slate-700">No Results Yet</h3>
        <p className="text-slate-500 text-sm mt-1">Results will be published soon.</p>
      </div>
    );
  }

  const currentProgram = filteredResults[currentIndex];
  const hasPositions = currentProgram.withPosition.length > 0;

return (
  <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
    <div className="relative rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden">
      {/* ===== Mobile-first navigation ===== */}
      <button
        onClick={prevSlide}
        disabled={filteredResults.length <= 1}
        className="hidden sm:block absolute left-2 top-1/2 -translate-y-1/2 z-10
                   bg-white/90 backdrop-blur p-1.5 rounded-full shadow
                   hover:shadow-md disabled:opacity-40"
        aria-label="Previous"
      >
        <ChevronLeft className="h-4 w-4 text-slate-700" />
      </button>

      <button
        onClick={nextSlide}
        disabled={filteredResults.length <= 1}
        className="hidden sm:block absolute right-2 top-1/2 -translate-y-1/2 z-10
                   bg-white/90 backdrop-blur p-1.5 rounded-full shadow
                   hover:shadow-md disabled:opacity-40"
        aria-label="Next"
      >
        <ChevronRight className="h-4 w-4 text-slate-700" />
      </button>

      {/* ===== Content ===== */}
      <div className="p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-600 text-white flex-shrink-0">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-base sm:text-lg leading-tight">
                {currentProgram.programName}
              </h2>
              <div className="flex flex-wrap gap-1.5 mt-1 text-xs">
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  ID: {currentProgram.programId}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                  <Users className="inline h-3 w-3 mr-0.5" />
                  {currentProgram.placements.length}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700">
                  {formatTimeAgo(currentProgram.datePublished)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Winner Cards (grid, no scroll) ===== */}
        {hasPositions ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {currentProgram.withPosition.map((p) => {
              const score = calcScore(p.position, p.grade, 'single');
              const studentName = getStudentName(p.studentId);

              return (
                <div
                  key={p.studentId}
                  className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm hover:shadow transition-all"
                >
                  {/* Rank badge */}
                  <div
                    className={`inline-flex items-center justify-center px-2 py-1 rounded-md text-white font-bold text-xs ${getPositionBg(
                      p.position
                    )}`}
                  >
                    {p.position}
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-slate-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                      {p.studentId}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 leading-tight">
                        {studentName}
                      </p>
                      <p className="text-xs text-slate-500">ID: {p.studentId}</p>
                    </div>
                  </div>

                  <div className="mt-2 flex justify-between text-xs">
                    <span className="text-slate-600">Grade:</span>
                    <span className="font-bold text-slate-800">{p.grade}</span>
                  </div>

                  <div className="mt-1 flex justify-between items-center">
                    <span className="text-slate-600 text-xs">Score:</span>
                    <span className="font-bold text-amber-600 text-xs">
                      {score} pts
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-500 text-sm">
            No ranked participants yet.
          </div>
        )}
      </div>
    </div>

    {/* ===== Pagination dots (mobile only) ===== */}
    {filteredResults.length > 1 && (
      <div className="flex justify-center gap-1.5 mt-4 md:hidden">
        {filteredResults.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 w-1.5'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    )}
  </div>
);
}