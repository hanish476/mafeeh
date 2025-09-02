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
    "placements": []
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
  }
];