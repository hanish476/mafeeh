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

export function calcScore(position, grade, category, programType, ) {
  
  // Position points based on program type
  const isKulliyah = category ? "kulliyah" === category.toLowerCase() : false;
  const isSingle = programType ? "single" === programType.toLowerCase() : false;
  // case-insensitive
  let positionPoints = {};
  if (isKulliyah) {
    positionPoints = { 1: 10, 2: 7, 3: 5 };
  } else if (isSingle) {
    positionPoints = { 1: 5, 2: 3, 3: 1 };
  } else if (programType && programType.toLowerCase() === "group") {
    positionPoints = { 1: 10, 2: 7, 3: 3 };
  }

  // Grade points
 const gradePoints = { A: 5, B: 3 };

  let total = 0;
  if (position && position in positionPoints) total += positionPoints[position];
  if (grade && grade in gradePoints)           total += gradePoints[grade];

  return total;
}