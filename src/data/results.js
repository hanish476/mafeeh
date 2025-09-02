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
      { position: 2, grade: "B", studentId: "812" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "793" }, // 1 + 0 = 1
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
      { grade: "B", studentId: "736" }               // 0 + 3 = 3 (no position)
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
  {
    programId: "B02",
    programName: "ḤIFẒ",
    category: "Bidaya",
    programType: "single",
    datePublished: "2025-08-31T16:00:00",
    placements: [
      { position: 1, grade: "A", studentId: "800" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "790" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "803" }, // 1 + 3 =              // 0 + 3 = 3 (no position)
    ]
  },
  {
    programId: "B12",
    programName: "KADHAKADHANAM",
    category: "Bidaya",
    programType: "single",
    datePublished: "2025-08-31T16:00:00",
    placements: [
      { position: 1, grade: "B", studentId: "794" }, // 5 + 5 = 10
      { position: 2, grade: "B", studentId: "805" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "808" }, // 1 + 3 =              // 0 + 3 = 3 (no position)
    ]
  },
  {
    programId: "B20",
    programName: "ESSAY WRITING MLM",
    category: "Bidaya",
    programType: "single",
    datePublished: "2025-08-31T16:00:00",
    placements: [
      { position: 1, grade: "B", studentId: "810" }, // 5 + 5 = 10
      { position: 2, grade: "B", studentId: "790" }, // 3 + 3 = 6
      { position: 3, grade: "B", studentId: "793" }, // 1 + 3 =              // 0 + 3 = 3 (no position)
      { grade: "B", studentId: "794" }, // 1 + 3 =              // 0 + 3 = 3 (no position)
      { grade: "B", studentId: "791" }, // 1 + 3 =              // 0 + 3 = 3 (no position)
    ]
  },
  {
    programId: "TY08",
    programName: "SPEECH MLM",
    category: "Thaniyya",
    programType: "single",
    datePublished: "2025-08-31T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "617" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "677" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "616" }, // 1 + 3 =  

    ]
  },
  {
    programId: "TY10",
    programName: "SPEECH URDU",
    category: "Thaniyya",
    programType: "single",
    datePublished: "2025-08-31T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "671" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "662" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "645" }, // 1 + 3 =  

    ]
  },
  {
    programId: "TY13",
    programName: "GRAMMAR QUIZ",
    category: "Thaniyya",
    programType: "single",
    datePublished: "2025-08-31T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "615" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "618" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "688" }, // 1 + 3 =  

    ]
  },
  {
    programId: "A09",
    programName: "SIYASI THAQREER URD",
    category: "Aliya",
    programType: "single",
    datePublished: "2025-08-31T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "615" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "618" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "688" }, // 1 + 3 =  

    ]
  },
  {
    programId: "TY119",
    programName: "SIYASI THAQREER URD",
    category: "Aliya",
    programType: "single",
    datePublished: "2025-08-31T16:00:00",
    placements: [
      { position: 1, grade: "A", studentId: "675" }, // 5 + 5 = 10
      { position: 2, grade: "A", studentId: "644" }, // 3 + 3 = 6
      { position: 3, grade: "A", studentId: "619" }, // 1 + 3 =  
      { grade: "A", studentId: "626" }, // 1 + 3 =
      { grade: "A", studentId: "670" }, // 1 + 3 =
      { grade: "A", studentId: "657" }, // 1 + 3 =
      { grade: "A", studentId: "662" }, // 1 + 3 =
      { grade: "A", studentId: "676" }, // 1 + 3 =

    ]
  },
  {
    programId: "A01",
    programName: "KHUṬBAH",
    category: "Aliya",
    programType: "single",
    datePublished: "2025-08-31T16:00:00",
    placements: [
      { position: 1, grade: "A", studentId: "785" }, // 5 + 5 = 10
      { position: 2, grade: "B", studentId: "453" }, // 3 + 3 = 6
      { position: 3, grade: "C", studentId: "502" }, // 1 + 3 =  

    ]
  },
  {
    programId: "A07",
    programName: "JUNCTION SPEECH MLM",
    category: "Aliya",
    programType: "single",
    datePublished: "2025-08-31T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "458" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "782" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "498" }, // 1 + 3 =  

    ]
  },
  {
    programId: "B01",
    programName: "QIRĀʾAH",
    category: "Bidaya",
    programType: "single",
    datePublished: "2025-09-1T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "806" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "798" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "817" }, // 1 + 3 =  

    ]
  },
  {
    programId: "B10",
    programName: "SPEECH ENG",
    category: "Bidaya",
    programType: "single",
    datePublished: "2025-09-1T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "790" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "799" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "816" }, // 1 + 3 =  

    ]
  },
  {
    programId: "B23",
    programName: "HAND WRITING ARB",
    category: "Bidaya",
    programType: "single",
    datePublished: "2025-09-1T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "809" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "801" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "788" }, // 1 + 3 =  

    ]
  },
  {
    programId: "U01",
    programName: "QIRĀʾAH",
    category: "Ula",
    programType: "single",
    datePublished: "2025-09-1T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "753" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "775" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "726" }, // 1 + 3 =  

    ]
  },
  {
    programId: "U02",
    programName: "ḤIFẒ",
    category: "Ula",
    programType: "single",
    datePublished: "2025-09-1T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "708" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "724" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "753" }, // 1 + 3 =  

    ]
  },
  {
    programId: "U09",
    programName: "CHAIN STORY",
    category: "Ula",
    programType: "single",
    datePublished: "2025-09-1T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "722" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "722" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "725" }, // 1 + 3 =  

    ]
  },
  {
    programId: "U11",
    programName: "SPEECH ENG",
    category: "Ula",
    programType: "single",
    datePublished: "2025-09-1T16:00:00",
    placements: [
      { position: 1, grade: "A", studentId: "778" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "748" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "710" }, // 1 + 3 =  

    ]
  },
  {
    programId: "U13",
    programName: "WORD FIGHT ENG",
    category: "Ula",
    programType: "single",
    datePublished: "2025-09-1T16:00:00",
    placements: [
      { position: 1, grade: "B", studentId: "778" }, // 5 + 5 = 10
      { position: 2, grade: "B", studentId: "748" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "710" }, // 1 + 3 =  

    ]
  },
  {
    programId: "TH01",
    programName: "ḤIFẒ & QIRĀʾAH |",
    category: "Thanawiyya",
    programType: "single",
    datePublished: "2025-09-1T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "607" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "559" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "535" }, // 1 + 3 =  

    ]
  },
  {
    programId: "TH06",
    programName: "SPEECH URD",
    category: "Thanawiyya",
    programType: "single",
    datePublished: "2025-09-1T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "551" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "585" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "543" }, // 1 + 3 =  

    ]
  },
  {
    programId: "TH17",
    programName: "SPEECH URD",
    category: "Thanawiyya",
    programType: "single",
    datePublished: "2025-09-1T16:00:00",
    placements: [
      { position: 1, grade: "-", studentId: "551" }, // 5 + 5 = 10
      { position: 2, grade: "-", studentId: "585" }, // 3 + 3 = 6
      { position: 3, grade: "-", studentId: "543" }, // 1 + 3 =  

    ]
  },

  
 {
    "programId": "B04",
    "programName": "WAʿẒ",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "795",
        "position": 1
      },
      {
        "studentId": "800",
        "position": 2
      },
      {
        "studentId": "801",
        "position": 3
      }
    ]
  },
  {
    "programId": "U08",
    "programName": "PADHYAPARAYANAM",
    "category": "Ula",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "753",
        "position": 1
      },
      {
        "studentId": "744",
        "position": 2
      },
      {
        "studentId": "726",
        "position": 3
      }
    ]
  },
  {
    "programId": "U22",
    "programName": "POEM WRITING ENG",
    "category": "Ula",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "736",
        "position": 1,
        "grade": "B"
      },
      {
        "studentId": "710",
        "position": 2
      },
      {
        "studentId": "749",
        "position": 3
      }
    ]
  },
  {
    "programId": "U25",
    "programName": "STORY COMPLETION ARB",
    "category": "Ula",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "708",
        "position": 1
      },
      {
        "studentId": "720",
        "position": 2
      },
      {
        "studentId": "730",
        "position": 3
      }
    ]
  },
  {
    "programId": "U28",
    "programName": "GK QUIZ",
    "category": "Ula",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "750",
        "position": 1
      },
      {
        "studentId": "713",
        "position": 2
      },
      {
        "studentId": "738",
        "position": 3
      }
    ]
  },
  {
    "programId": "TY01",
    "programName": "ḤIFẒ & QIRĀʾAH",
    "category": "Thaniyya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "616",
        "position": 1
      },
      {
        "studentId": "668",
        "position": 2
      },
      {
        "studentId": "642",
        "position": 3
      }
    ]
  },
  {
    "programId": "TY12",
    "programName": "ORU NIMISHAM",
    "category": "Thaniyya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "647",
        "position": 1
      },
      {
        "studentId": "677",
        "position": 2
      },
      {
        "studentId": "653",
        "position": 3
      }
    ]
  },
  {
    "programId": "TY22",
    "programName": "ESSAY ARB",
    "category": "Thaniyya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "653",
        "position": 1
      },
      {
        "studentId": "681",
        "position": 2
      },
      {
        "studentId": "684",
        "position": 3
      }
    ]
  },
  {
    "programId": "TY28",
    "programName": "SHORT STORY MLM",
    "category": "Thaniyya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "676",
        "position": 1,
        "grade": "B"
      },
      {
        "studentId": "659",
        "position": 2,
        "grade": "B"
      },
      {
        "studentId": "626",
        "position": 3,
        "grade": "B"
      },
      {
        "studentId": "665",
        "position": 3,
        "grade": "B"
      }
    ]
  },
  {
    "programId": "TH07",
    "programName": "TADRĪS MLM",
    "category": "Thanawiyya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "537",
        "position": 1,
        "grade": "B"
      },
      {
        "studentId": "535",
        "position": 2,
        "grade": "B"
      },
      {
        "studentId": "603",
        "position": 3
      }
    ]
  },
  {
    "programId": "A08",
    "programName": "ACADEMIC TALK ENG",
    "category": "Aliya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "458",
        "position": 1,
        "grade": "B"
      },
      {
        "studentId": "485",
        "position": 2,
        "grade": "B"
      },
      {
        "studentId": "490",
        "position": 3,
        "grade": "B"
      }
    ]
  },
  {
    "programId": "A25",
    "programName": "CALLIGRAPHY",
    "category": "Aliya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "449",
        "position": 1
      },
      {
        "studentId": "498",
        "position": 2
      },
      {
        "studentId": "453",
        "position": 3
      }
    ]
  },
  {
    "programId": "TH17",
    "programName": "POEM ARB",
    "category": "Thanawiyya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "535",
        "position": 1
      },
      {
        "studentId": "572",
        "position": 2
      },
      {
        "studentId": "606",
        "position": 3
      }
    ]
  },
  {
    "programId": "B05",
    "programName": "SONG MLM",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-02T12:51:00",
    "placements": [
      { "studentId": "817", "position": 1, "grade": "A", "team": "SAMA" },
      { "studentId": "806", "position": 2, "grade": "A", "team": "NAWA" },
      { "studentId": "800", "position": 3, "grade": "-", "team": "SWABA" }
    ]
  },
  {
    "programId": "B13",
    "programName": "WORD FIGHT ENG",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-02T12:51:00",
    "placements": [
      { "studentId": "816", "position": 1, "grade": "A", "team": "SAMA" },
      { "studentId": "793", "position": 2, "grade": "A", "team": "SWABA" },
      { "studentId": "802", "position": 3, "grade": "B", "team": "SWABA" },
      { "studentId": "790", "position": 4, "grade": "B", "team": "SWAFA" }
    ]
  },
  {
    "programId": "B19",
    "programName": "MSWORD",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-02T12:51:00",
    "placements": [
      { "studentId": "788", "position": 1, "grade": "-", "team": "SWABA" },
      { "studentId": "807", "position": 2, "grade": "-", "team": "SWAFA" },
      { "studentId": "794", "position": 3, "grade": "-", "team": "NAWA" }
    ]
  },
  {
    "programId": "B22",
    "programName": "HAND WRITING ENG",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-02T12:51:00",
    "placements": [
      { "studentId": "793", "position": 1, "grade": "B", "team": "SWABA" },
      { "studentId": "814", "position": 2, "grade": "B", "team": "SWABA" },
      { "studentId": "807", "position": 3, "grade": "-", "team": "SWAFA" }
    ]
  },
  {
    "programId": "U05",
    "programName": "SONG ARB",
    "category": "Ula",
    "programType": "single",
    "datePublished": "2025-09-02T12:51:00",
    "placements": [
      { "studentId": "753", "position": 1, "grade": "A", "team": "SAMA" },
      { "studentId": "726", "position": 2, "grade": "A", "team": "SWABA" },
      { "studentId": "775", "position": 3, "grade": "-", "team": "NAWA" }
    ]
  },
  {
    "programId": "TY09",
    "programName": "SPEECH ARB",
    "category": "Thaniyya",
    "programType": "single",
    "datePublished": "2025-09-02T12:51:00",
    "placements": [
      { "studentId": "653", "position": 1, "grade": "A", "team": "SWAFA" },
      { "studentId": "618", "position": 2, "grade": "A", "team": "NAWA" },
      { "studentId": "636", "position": 3, "grade": "A", "team": "SWAFA" },
      { "studentId": "681", "position": 3, "grade": "B", "team": "NAWA" }
    ]
  },
  {
    "programId": "TY24",
    "programName": "POEM MLM",
    "category": "Thaniyya",
    "programType": "single",
    "datePublished": "2025-09-02T12:51:00",
    "placements": [
      { "studentId": "614", "position": 1, "grade": "A", "team": "SAMA" },
      { "studentId": "676", "position": 2, "grade": "-", "team": "SWAFA" },
      { "studentId": "683", "position": 3, "grade": "-", "team": "SAMA" }
    ]
  },
  {
    "programId": "TH14",
    "programName": "ESSAY URD",
    "category": "Thanawiyya",
    "programType": "single",
    "datePublished": "2025-09-02T12:51:00",
    "placements": [
      { "studentId": "551", "position": 1, "grade": "A", "team": "SAMA" },
      { "studentId": "543", "position": 2, "grade": "A", "team": "SWABA" },
      { "studentId": "585", "position": 3, "grade": "B", "team": "SAMA" },
      { "studentId": "587", "position": 3, "grade": "B", "team": "SWAFA" }
    ]
  },
  {
    "programId": "A19",
    "programName": "POEM URD",
    "category": "Aliya",
    "programType": "single",
    "datePublished": "2025-09-02T12:51:00",
    "placements": [
      { "studentId": "781", "position": 1, "grade": "A", "team": "SAMA" },
      { "studentId": "780", "position": 2, "grade": "B", "team": "SWAFA" },
      { "studentId": "458", "position": 3, "grade": "B", "team": "SWABA" }
    ]
  },
  {
    "programId": "B01",
    "programName": "QIRĀʾAH",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "806",
        "position": 1
      },
      {
        "studentId": "798",
        "position": 2
      },
      {
        "studentId": "817",
        "position": 3
      }
    ]
  },
  {
    "programId": "B10",
    "programName": "SPEECH ENG",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "790",
        "position": 1
      },
      {
        "studentId": "799",
        "position": 2
      },
      {
        "studentId": "816",
        "position": 3
      }
    ]
  },
  {
    "programId": "B23",
    "programName": "HAND WRITING ARB",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "809",
        "position": 1
      },
      {
        "studentId": "801",
        "position": 2
      },
      {
        "studentId": "788",
        "position": 3
      }
    ]
  },
  {
    "programId": "U01",
    "programName": "QIRĀʾAH",
    "category": "Ula",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "753",
        "position": 1
      },
      {
        "studentId": "775",
        "position": 2
      },
      {
        "studentId": "726",
        "position": 3
      }
    ]
  },
  {
    "programId": "U02",
    "programName": "ḤIFẒ",
    "category": "Ula",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "708",
        "position": 1
      },
      {
        "studentId": "724",
        "position": 2
      },
      {
        "studentId": "753",
        "position": 3
      }
    ]
  }
, {
    "programId": "B06",
    "programName": "SONG ARB",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "788",
        "position": 1,
        "grade": "B"
      },
      {
        "studentId": "817",
        "position": 1,
        "grade": "B"
      },
      {
        "studentId": "798",
        "position": 3
      }
    ]
  },
  {
    "programId": "B08",
    "programName": "GROUP SONG",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "792",
        "position": 1
      },
      {
        "studentId": "796",
        "position": 2
      },
      {
        "studentId": "801",
        "position": 3
      }
    ]
  },
  {
    "programId": "B11",
    "programName": "GK QUIZ",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "810",
        "position": 1,
        "grade": "B"
      },
      {
        "studentId": "797",
        "position": 2,
        "grade": "B"
      },
      {
        "studentId": "790",
        "position": 3
      }
    ]
  },
  {
    "programId": "B27",
    "programName": "DIARY WRITING MLM",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "809",
        "position": 1,
        "grade": "A"
      },
      {
        "studentId": "810",
        "position": 2,
        "grade": "A"
      },
      {
        "studentId": "796",
        "position": 3,
        "grade": "B"
      }
    ]
  },
  {
    "programId": "B28",
    "programName": "PICTURE STORY MLM",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "796",
        "position": 1,
        "grade": "A"
      },
      {
        "studentId": "798",
        "position": 2,
        "grade": "A"
      },
      {
        "studentId": "799",
        "position": 3,
        "grade": "B"
      },
      {
        "studentId": "804",
        "position": 3,
        "grade": "B"
      }
    ]
  },
  {
    "programId": "TY07",
    "programName": "PADHYAPARAYANAM",
    "category": "Thaniyya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "626",
        "position": 1,
        "grade": "A"
      },
      {
        "studentId": "677",
        "position": 2,
        "grade": "A"
      },
      {
        "studentId": "653",
        "position": 3,
        "grade": "A"
      },
      {
        "studentId": "625",
        "position": 3,
        "grade": "A"
      },
      {
        "studentId": "646",
        "grade": "B"
      },
      {
        "studentId": "687",
        "grade": "B"
      }
    ]
  },
  {
    "programId": "TY09",
    "programName": "SPEECH ARB",
    "category": "Thaniyya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "653",
        "position": 1,
        "grade": "A"
      },
      {
        "studentId": "618",
        "position": 2,
        "grade": "A"
      },
      {
        "studentId": "636",
        "position": 3,
        "grade": "A"
      },
      {
        "studentId": "681",
        "position": 3,
        "grade": "B"
      }
    ]
  },
  {
    "programId": "TY11",
    "programName": "SPEECH ENG",
    "category": "Thaniyya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "658",
        "position": 1,
        "grade": "A"
      },
      {
        "studentId": "619",
        "position": 2,
        "grade": "A"
      },
      {
        "studentId": "667",
        "position": 3,
        "grade": "B"
      },
      {
        "studentId": "688",
        "grade": "B"
      },
      {
        "studentId": "620",
        "grade": "B"
      }
    ]
  },
  {
    "programId": "TH21",
    "programName": "SHORT STORY ARB",
    "category": "Thanawiyya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "536",
        "position": 1,
        "grade": "B"
      },
      {
        "studentId": "534",
        "position": 2,
        "grade": "B"
      },
      {
        "studentId": "601",
        "position": 3
      }
    ]
  },
  {
    "programId": "A15",
    "programName": "ESSAY URD",
    "category": "Aliya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "781",
        "position": 1,
        "grade": "A"
      },
      {
        "studentId": "780",
        "position": 2,
        "grade": "A"
      },
      {
        "studentId": "502",
        "position": 3,
        "grade": "A"
      },
      {
        "studentId": "522",
        "grade": "B"
      }
    ]
  },
  {
    "programId": "A16",
    "programName": "POEM MLM",
    "category": "Aliya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "782",
        "position": 1,
        "grade": "A"
      },
      {
        "studentId": "781",
        "position": 2,
        "grade": "B"
      },
      {
        "studentId": "498",
        "position": 3
      },
      {
        "studentId": "490",
        "position": 3
      }
    ]
  },
  {
    "programId": "A20",
    "programName": "SHORT STORY MLM",
    "category": "Aliya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "782",
        "position": 1,
        "grade": "A"
      },
      {
        "studentId": "517",
        "position": 2,
        "grade": "B"
      },
      {
        "studentId": "482",
        "position": 3,
        "grade": "B"
      },
      {
        "studentId": "490",
        "grade": "B"
      }
    ]
  },
  {
    "programId": "K08",
    "programName": "MUSHARA",
    "category": "Kulliyya",
    "programType": "single",
    "datePublished": "2025-09-01T12:00:00",
    "placements": [
      {
        "studentId": "484",
        "position": 1,
        "grade": "A"
      },
      {
        "studentId": "588",
        "position": 2,
        "grade": "A"
      },
      {
        "studentId": "454",
        "position": 3,
        "grade": "B"
      }
    ]
  },
  {
    "programId": "B15",
    "programName": "SUDOKU",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "790", "position": 1, "grade": "B", "team": "SWAFA" },
      { "studentId": "814", "position": 2, "grade": null, "team": "SWABA" },
      { "studentId": "792", "position": 3, "grade": null, "team": "NAWA" }
    ]
  },
  {
    "programId": "B16",
    "programName": "MATH TALENT",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "790", "position": 1, "grade": "B", "team": "SWAFA" },
      { "studentId": "816", "position": 2, "grade": "A", "team": "SAMA" },
      { "studentId": "792", "position": 2, "grade": null, "team": "NAWA" }
    ]
  },
  {
    "programId": "B17",
    "programName": "PENCIL DRAWING",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "792", "position": 1, "grade": "B", "team": "NAWA" },
      { "studentId": "814", "position": 2, "grade": "B", "team": "SWABA" },
      { "studentId": "803", "position": 3, "grade": "B", "team": "NAWA" },
      { "studentId": "801", "position": null, "grade": "B", "team": "SWAFA" }
    ]
  },
  {
    "programId": "B18",
    "programName": "TYPING MASTER ENG",
    "category": "Bidaya",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "807", "position": 1, "grade": "A", "team": "SWAFA" },
      { "studentId": "803", "position": 2, "grade": "A", "team": "NAWA" },
      { "studentId": "816", "position": 3, "grade": "A", "team": "SAMA" },
      { "studentId": "814", "position": 4, "grade": "B", "team": "SWABA" },
      { "studentId": "805", "position": 5, "grade": "B", "team": "SWABA" },
      { "studentId": "815", "position": 6, "grade": "B", "team": "SAMA" }
    ]
  },
  {
    "programId": "U10",
    "programName": "SPEECH MLM",
    "category": "Ula",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "725", "position": 2, "grade": "A", "team": "SAMA" },
      { "studentId": "762", "position": 2, "grade": "A", "team": "SWABA" },
      { "studentId": "763", "position": 3, "grade": "A", "team": "SWAFA" },
      { "studentId": "758", "position": 3, "grade": "A", "team": "SAMA" },
      { "studentId": "766", "position": null, "grade": "B", "team": "NAWA" },
      { "studentId": "709", "position": null, "grade": "B", "team": "SWABA" }
    ]
  },
  {
    "programId": "U14",
    "programName": "MULAFAZAH ARB",
    "category": "Ula",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "751", "position": 1, "grade": "A", "team": "SWAFA" },
      { "studentId": "727", "position": 2, "grade": "A", "team": "SWAFA" },
      { "studentId": "750", "position": 3, "grade": "A", "team": "SWABA" },
      { "studentId": "708", "position": null, "grade": "B", "team": "NAWA" },
      { "studentId": "746", "position": null, "grade": "B", "team": "NAWA" }
    ]
  },
  {
    "programId": "U20",
    "programName": "ESSAY WRITING MLM",
    "category": "Ula",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "758", "position": 1, "grade": "A", "team": "SAMA" },
      { "studentId": "757", "position": 2, "grade": "A", "team": "NAWA" },
      { "studentId": "725", "position": 3, "grade": "B", "team": "SAMA" }
    ]
  },
  {
    "programId": "U30",
    "programName": "PENCIL DRAWING",
    "category": "Ula",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "739", "position": 1, "grade": "A", "team": "SWABA" },
      { "studentId": "746", "position": 2, "grade": "A", "team": "NAWA" },
      { "studentId": "736", "position": 3, "grade": "A", "team": "SAMA" },
      { "studentId": "694", "position": 4, "grade": "A", "team": "SAMA" }
    ]
  },
  {
    "programId": "TY06",
    "programName": "GROUP SONG",
    "category": "Thaniyya",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "687", "position": 1, "grade": "B", "team": "SAMA" },
      { "studentId": "655", "position": 2, "grade": "B", "team": "NAWA" },
      { "studentId": "629", "position": 3, "grade": "B", "team": "SWABA" }
    ]
  },
  {
    "programId": "TY17",
    "programName": "MATH TALENT",
    "category": "Thaniyya",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "616", "position": 1, "grade": null, "team": "NAWA" },
      { "studentId": "658", "position": 2, "grade": null, "team": "SWAFA" },
      { "studentId": "624", "position": 3, "grade": "-", "team": "SWAFA" }
    ]
  },
  {
    "programId": "TH05",
    "programName": "SPEECH ARB",
    "category": "Thanawiyya",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "536", "position": 1, "grade": "A", "team": "NAWA" },
      { "studentId": "534", "position": 2, "grade": "A", "team": "SAMA" },
      { "studentId": "572", "position": 3, "grade": "B", "team": "SWAFA" }
    ]
  },
  {
    "programId": "TH08",
    "programName": "INSPIRING TALK MLM",
    "category": "Thanawiyya",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "604", "position": 1, "grade": "B", "team": "NAWA" },
      { "studentId": "539", "position": 2, "grade": null, "team": "SWAFA" },
      { "studentId": "550", "position": 3, "grade": null, "team": "NAWA" }
    ]
  },
  {
    "programId": "A19",
    "programName": "POEM URD",
    "category": "Aliya",
    "programType": "single",
    "datePublished": "2025-09-01T21:23:00",
    "placements": [
      { "studentId": "781", "position": 1, "grade": "A", "team": "SAMA" },
      { "studentId": "780", "position": 2, "grade": "B", "team": "SWAFA" },
      { "studentId": "458", "position": 3, "grade": "B", "team": "SWABA" }
    ]
  }

];