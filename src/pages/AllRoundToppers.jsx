import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { results, students } from "../data";
import { calcScore } from "../utils/calcScores";
import {
  Crown,
  Trophy,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Users,
  Star,
} from "lucide-react";

const toOrdinal = (n) =>
  n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`;

const classToCategory = (cls) => {
  if (cls === 1) return "Bidaya";
  if (cls === 2 || cls === 3) return "Ula";
  if (cls === 4 || cls === 5) return "Thaniyyah";
  if (cls === 6 || cls === 7) return "Thanawiyyah";
  if (cls === 8 || cls === 9) return "Aliya";
  return "Unknown";
};

const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const getPositionIcon = (position) => {
  switch (position) {
    case 1:
      return <Crown className="h-4 w-4 text-amber-600" />;
    case 2:
      return <Trophy className="h-4 w-4 text-blue-600" />;
    case 3:
      return <Award className="h-4 w-4 text-rose-600" />;
    default:
      return <Sparkles className="h-4 w-4 text-purple-600" />;
  }
};

const getPositionColor = (position) => {
  switch (position) {
    case 1:
      return "from-amber-400 to-amber-500 text-white shadow-sm";
    case 2:
      return "from-blue-400 to-blue-500 text-white shadow-sm";
    case 3:
      return "from-rose-400 to-rose-500 text-white shadow-sm";
    default:
      return "from-slate-400 to-slate-500 text-white shadow-sm";
  }
};

export default function AllRoundToppers() {
const toppers = useMemo(() => {
  const scoreByStudent = new Map();

  results.forEach((program) => {
    program.placements.forEach((p) => {
      /* ---------- skip group entries & broken student refs ---------- */
      if (program.programType === "group") return;
      if (!p.studentId || p.studentId === "undefined") return;

      const pts = calcScore(
        p.position || null,
        p.grade === "-" ? null : p.grade,
        program.programType,
        program.category
      );
      scoreByStudent.set(p.studentId, (scoreByStudent.get(p.studentId) || 0) + pts);
    });
  });

  const rows = Array.from(scoreByStudent.entries())
    .map(([studentId, total]) => {
      const stu = students.find((s) => s.id === studentId);
      return {
        studentId,
        total,
        name: stu?.name || "Unknown",
        team: stu?.team || "—",
        class: stu?.class ?? "—",
        category: classToCategory(stu?.class),
      };
    })
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name))
    .slice(0, 5)
    .map((row, i) => ({ ...row, position: i + 1 }));

  return rows;
}, []);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(toppers.length / itemsPerPage);

  const currentItems = toppers.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    if (toppers.length <= itemsPerPage) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentPage((page) => (page + 1) % totalPages);
    }, 8000);
    return () => clearInterval(interval);
  }, [toppers.length, totalPages]);

  const goPrev = () => {
    setDirection(-1);
    setCurrentPage((page) => (page - 1 + totalPages) % totalPages);
  };

  const goNext = () => {
    setDirection(1);
    setCurrentPage((page) => (page + 1) % totalPages);
  };

  if (!toppers.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-2xl shadow-xs p-8 border border-slate-100/70 text-center"
      >
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-slate-100 mb-4">
          <Star className="h-8 w-8 text-slate-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-700 mb-2">All-Round Toppers</h3>
        <p className="text-slate-500">No topper data available yet.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-2xl shadow-xs p-6 border border-slate-100/70"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Trophy className="h-6 w-6 text-amber-500" /> All-Round Toppers
        </h3>
        <span className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
          Top {toppers.length}
        </span>
      </div>

      {/* Grid with Prominent 1st Place */}
      <div className="relative overflow-hidden min-h-[380px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {currentItems.map((topper) => (
              <motion.div
                key={topper.studentId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                className={`
                  rounded-xl p-5 border border-slate-100 shadow-xs hover:shadow-md transition-all
                  ${
                    topper.position === 1
                      ? "sm:col-span-2 lg:col-span-2 bg-white"
                      : "bg-slate-50"
                  }
                `}
              >
                <div
                  className={`
                    flex flex-col ${topper.position === 1 ? "items-center text-center" : "items-start"}
                    gap-4 h-full
                  `}
                >
                  {/* Avatar & Rank */}
                  <div className="flex items-center gap-4 w-full">
                    <div className="relative">
                      <div
                        className={`
                          rounded-full flex items-center justify-center font-bold shadow-lg
                          ${
                            topper.position === 1
                              ? "h-24 w-24 text-3xl bg-gradient-to-br from-amber-400 to-amber-600 text-white"
                              : "h-16 w-16 text-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
                          }
                        `}
                      >
                        {initials(topper.name)}
                      </div>
                      <div
                        className={`
                          absolute -bottom-2 -right-2 rounded-full flex items-center justify-center font-bold text-white border-2 border-white shadow-lg
                          ${
                            topper.position === 1
                              ? "h-10 w-10 text-lg bg-gradient-to-br from-amber-500 to-amber-700"
                              : "h-8 w-8 text-sm bg-gradient-to-br from-blue-600 to-indigo-700"
                          }
                        `}
                      >
                        {topper.position}
                      </div>
                    </div>

                    {topper.position === 1 && (
                      <div className="flex flex-col justify-center ml-4">
                        <div className="flex items-center gap-2 text-amber-600">
                          <Crown className="h-6 w-6" />
                          <h4 className="text-2xl font-bold text-slate-800">Champion</h4>
                        </div>
                        <p className="text-slate-600 text-lg">All-Round Top Performer</p>
                      </div>
                    )}
                  </div>

                  {/* Name & ID */}
                  <div className={topper.position === 1 ? "mt-2" : ""}>
                    <h4
                      className={`font-bold ${
                        topper.position === 1 ? "text-2xl text-slate-800" : "text-lg text-slate-700"
                      }`}
                    >
                      {topper.name}
                    </h4>
                    <p className="text-slate-500 text-sm mt-1">Ad No: {topper.studentId}</p>
                  </div>

                  {/* Info Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <span className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                      <Users className="inline h-3 w-3 mr-1" />
                      Team {topper.team}
                    </span>
                    <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full">
                      Class {topper.class}
                    </span>
                    <span className="text-xs px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                      {topper.category}
                    </span>
                  </div>

                  {/* Score */}
                  <div className="mt-auto pt-4 w-full flex items-center justify-between">
                    <div>
                      <p className="text-slate-500 text-sm">Total Points</p>
                      <p className="font-bold text-amber-600 text-xl">{topper.total}</p>
                    </div>
                    <div
                      className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 ${getPositionColor(
                        topper.position
                      )}`}
                    >
                      {getPositionIcon(topper.position)}
                      {toOrdinal(topper.position)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-slate-500">Page {currentPage + 1} of {totalPages}</div>
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              disabled={currentPage === 0}
              className="h-10 w-10 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center disabled:opacity-50 hover:bg-slate-50"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentPage ? 1 : -1);
                    setCurrentPage(i);
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === currentPage ? "bg-amber-500 w-4" : "bg-slate-300"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              disabled={currentPage === totalPages - 1}
              className="h-10 w-10 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center disabled:opacity-50 hover:bg-slate-50"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}