// data/results.js
import { students } from "./students";

  // const categories = ["Bidaya", "Ula", "Thaniyya", "Thanawiyya", "Aliya", "Kulliya"];
/**
 * Results data for NAHJ ARTFEST 2025
 * All programs are classified as "single" based on current information.
 */
export const results = [
  {
    programId: "B21",
    programName: "HAND WRITING MLM",
    category: "Bidaya",
    programType: "single",
     datePublished: "2025-08-30T16:00:00",
    placements: [
      { position: 1, grade: "A", studentId: "803" }, // 5 + 5 = 10
      { position: 2, grade: "B", studentId: "793" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "812" }, // 1 + 0 = 1
    ]
  },
  {
    programId: "U18",
    programName: "WATER PAINTING",
    category: "Ula",
    programType: "single",
     datePublished: "2025-08-30T16:00:00",
    placements: [
      { position: 1, grade: "A", studentId: "743" }, // 5 + 5 = 10
      { position: 2, grade: "B", studentId: "717" }, // 3 + 3 = 6
      { position: 3, grade: "B", studentId: "746" }, // 1 + 3 = 4
    ]
  },
  {
    programId: "TY16",
    programName: "GK QUIZ",
    category: "Thaniyya",
    programType: "single",
    datePublished: "2025-08-30T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "614" }, // 5 + 0 = 5
      { position: 2, grade: "-", studentId: "659" }, // 3 + 0 = 3
      { position: 3, grade: "-", studentId: "624" }, // 1 + 0 = 1
    ]
  },
  {
    programId: "TH32",
    programName: "MAQAMA ARB",
    category: "Thanawiyya",
    programType: "single",
     datePublished: "2025-08-30T16:00:00",
    placements: [
      { position: 1, grade: "A", studentId: "534" }, // 5 + 5 = 10
      { position: 2, grade: "B", studentId: "535" }, // 3 + 3 = 6
      { position: 3, grade: "B", studentId: "518" }, // 1 + 3 = 4
    ]
  },
  {
    programId: "A13",
    programName: "ACADEMIC ESSAY",
    category: "Aliya",
    programType: "single",
    datePublished: "2025-08-30T16:00:00",
    placements: [
      { position: 1, grade: "A", studentId: "485" }, // 5 + 5 = 10
      { position: 2, grade: "B", studentId: "782" }, // 3 + 3 = 6
      { position: 3, grade: "B", studentId: "473" }, // 1 + 3 = 4
      { grade: "B", studentId: "456" }               // 0 + 3 = 3 (no position)
    ]
  },
];