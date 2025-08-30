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
        {/* Navigation */}
        <button
          onClick={prevSlide}
          disabled={filteredResults.length <= 1}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-lg shadow hover:shadow-md disabled:opacity-40 border border-slate-200"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5 text-slate-700" />
        </button>

        <button
          onClick={nextSlide}
          disabled={filteredResults.length <= 1}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-lg shadow hover:shadow-md disabled:opacity-40 border border-slate-200"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5 text-slate-700" />
        </button>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-xl bg-blue-600 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-lg line-clamp-2">
                  {currentProgram.programName}
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                    <strong>ID:</strong> {currentProgram.programId}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
                    <Users className="inline h-3.5 w-3.5 mr-1" />
                    {currentProgram.placements.length} Participants
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-sm">
                    {formatTimeAgo(currentProgram.datePublished)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Winner Cards */}
          {hasPositions ? (
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto pb-4 snap-x sm:grid sm:grid-cols-1 md:grid-cols-3 md:gap-6 md:overflow-visible hide-scrollbar"
              >
                {currentProgram.withPosition.map((p, idx) => {
                  // ✅ Use real calcScore with "single" program type
                  const score = calcScore(p.position, p.grade, "single");
                  const studentName = getStudentName(p.studentId);

                  return (
                    <div
                      key={`${p.studentId}-${idx}`}
                      className="snap-start flex-shrink-0 w-72 md:w-full bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all relative"
                    >
                      {/* Rank Badge */}
                      <div
                        className={`absolute -top-2.5 -right-2.5 h-10 w-10 rounded-full ${getPositionBg(
                          p.position
                        )} flex items-center justify-center text-white font-bold text-sm shadow`}
                      >
                        {p.position}
                      </div>

                      {/* Medal Icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center text-white font-bold text-sm">
                          {p.studentId}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 text-sm truncate max-w-36">
                            {studentName}
                          </h3>
                          <p className="text-xs text-slate-500">Ad: {p.studentId}</p>
                        </div>
                      </div>

                      {/* Grade & Score */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-600">Grade</span>
                          <span className="font-bold text-slate-800">{p.grade}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5 text-amber-600">
                            {getMedalIcon(p.position)}
                            <span className="text-slate-600">Score</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            <span className="font-bold text-slate-800">{score}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Scroll Indicator */}
              {currentProgram.withPosition.length > 1 && (
                <div className="flex justify-center mt-4 md:hidden space-x-2">
                  {currentProgram.withPosition.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full ${
                        i === 0 ? "bg-blue-600" : "bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500 text-sm">
              No ranked participants yet.
            </div>
          )}
        </div>
      </div>

      {/* Pagination Dots */}
      {filteredResults.length > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {filteredResults.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === currentIndex ? "bg-blue-600 w-6" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}