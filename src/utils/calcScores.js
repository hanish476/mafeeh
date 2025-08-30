/**
 * Calculates the score for a student based on:
 * - Their position (1st, 2nd, 3rd) → gives position points (depends on program type)
 * - Their grade (A, B) → gives fixed grade points
 * - Both are added together if present.
 *
 * @param {number|null} position - 1, 2, or 3 (from placement), or null
 * @param {string|null} grade - "A", "B", "-", or null
 * @param {string} programType - One of: "single", "group", "kulliyah"
 * @returns {number} Total calculated score
 */
export function calcScore(position, grade, programType = "single") {
  // Position points based on program type
  const positionPoints = {
    single: { 1: 5, 2: 3, 3: 1 },
    group:  { 1: 10, 2: 7, 3: 3 },
    kulliyah: { 1: 10, 2: 7, 3: 5 }
  };

  // Grade points (same across all types)
  const gradePoints = {
    A: 5,
    B: 3,
    // C is not defined in bylaws
  };

  let totalPoints = 0;

  // Add position points if valid
  if (position && positionPoints[programType] && positionPoints[programType][position]) {
    totalPoints += positionPoints[programType][position];
  }

  // Add grade points if valid
  if (grade && gradePoints[grade]) {
    totalPoints += gradePoints[grade];
  }

  return totalPoints;
}