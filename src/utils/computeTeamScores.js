// utils/computeTeamScores.js
import { results, students } from "../data";
import { calcScore } from "./calcScores";

const VALID_CATEGORIES = [
  "Bidaya",
  "Ula",
  "Thaniyya",
  "Thanawiyya",
  "Aliya",
  "Kulliyah"
];
const VALID_TEAMS = new Set(["NAWA", "SWAFA", "SAMA", "SWABA"]);

export const getCategoryTopTeams = () => {
  // 1️⃣  zero-initialise
  const categoryTeamScores = Object.fromEntries(
    VALID_CATEGORIES.map(cat => [cat, Object.fromEntries(
      [...VALID_TEAMS].map(team => [team, 0])
    )])
  );

  const studentMap = new Map(students.map(s => [s.id, s]));

  // 2️⃣  walk through every program
  results.forEach(program => {
    const category = program.category;
    if (!VALID_CATEGORIES.includes(category)) return;

    const effectiveType = /^k/i.test(program.programId)
      ? "kulliyah"
      : program.programType ?? "single";

    program.placements.forEach(p => {
      const student = studentMap.get(p.studentId);
      if (!student || !VALID_TEAMS.has(student.team)) return;

      // 3️⃣  score with the *effective* type
      const points = calcScore(
        p.position ?? null,
        p.grade === "-" ? null : p.grade,
        effectiveType
      );

      categoryTeamScores[category][student.team] += points;
    });
  });

  // 4️⃣  sort & return
  return VALID_CATEGORIES.map(category => ({
    category,
    teams: Object.entries(categoryTeamScores[category])
      .sort(([, a], [, b]) => b - a)
      .map(([team, score]) => ({ team, score }))
  }));
};