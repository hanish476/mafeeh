// utils/computeTeamScores.js
import { results, students } from "../data";

export const getCategoryTopTeams = () => {
  const categories = ["Bidaya", "Ula", "Thaniyya", "Thanawiyya", "Aliya", "Kulliya"];
  const teams = ["NAWA", "SWAFA", "SAMA", "SWABA"];

  const categoryTeamScores = {};

  // Initialize
  categories.forEach((cat) => {
    categoryTeamScores[cat] = {};
    teams.forEach((team) => {
      categoryTeamScores[cat][team] = 0;
    });
  });

  const studentMap = new Map(students.map((s) => [s.id, s]));

  results.forEach((program) => {
    const category = program.category;
    if (!categories.includes(category)) return;

    program.placements.forEach((p) => {
      const student = studentMap.get(p.studentId);
      if (!student) return;

      const team = student.team;
      if (!teams.includes(team)) return;

      // Scoring
      const grade = p.grade || "C";
      const position = p.position;

      let points = 0;
      if (position === 1) points += 5;
      else if (position === 2) points += 3;
      else if (position === 3) points += 1;

      if (grade === "A") points += 5;
      else if (grade === "B") points += 3;
      else if (grade === "C") points += 1;

      categoryTeamScores[category][team] += points;
    });
  });

  // Convert to sorted array
  return categories.map((category) => {
    const teamsArray = Object.entries(categoryTeamScores[category])
      .map(([team, score]) => [team, score])
      .sort((a, b) => b[1] - a[1]); // Descending by score

    return { category, teams: teamsArray };
  });
};