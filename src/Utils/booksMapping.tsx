export const bookMappings:{[book:string]:string} = {
    "Genesis": "1",
    "Exodus": "2",
    "Leviticus": "3",
    "Numbers": "4",
    "Deuteronomy": "5",
    "Joshua": "6",
    "Judges": "7",
    "Ruth": "8",
    "1 Samuel": "9",
    "2 Samuel": "10",
    "1 Kings": "11",
    "2 Kings": "12",
    "1 Chronicles": "13",
    "2 Chronicles": "14",
    "Ezra": "15",
    "Nehemiah": "16",
    "Esther": "17",
    "Job": "18",
    "Psalms": "19",
    "Proverbs": "20",
    "Ecclesiastes": "21",
    "Song of Solomon": "22",
    "Isaiah": "23",
    "Jeremiah": "24",
    "Lamentations": "25",
    "Ezekiel": "26",
    "Daniel": "27",
    "Hosea": "28",
    "Joel": "29",
    "Amos": "30",
    "Obadiah": "31",
    "Jonah": "32",
    "Micah": "33",
    "Nahum": "34",
    "Habakkuk": "35",
    "Zephaniah": "36",
    "Haggai": "37",
    "Zechariah": "38",
    "Malachi": "39",
    "Matthew": "40",
    "Mark": "41",
    "Luke": "42",
    "John": "43",
    "Acts": "44",
    "Romans": "45",
    "1 Corinthians": "46",
    "2 Corinthians": "47",
    "Galatians": "48",
    "Ephesians": "49",
    "Philippians": "50",
    "Colossians": "51",
    "1 Thessalonians": "52",
    "2 Thessalonians": "53",
    "1 Timothy": "54",
    "2 Timothy": "55",
    "Titus": "56",
    "Philemon": "57",
    "Hebrews": "58",
    "James": "59",
    "1 Peter": "60",
    "2 Peter": "61",
    "1 John": "62",
    "2 John": "63",
    "3 John": "64",
    "Jude": "65",
    "Revelation": "66"
  }
  

export const chapterVerseCount:{[book:string]:{"chapters":number,"verses":number[]}} = {
  "Genesis": {
    "chapters": 50,
    "verses": [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 25, 24, 21, 16, 27, 33, 38, 34, 35, 31, 24, 67, 22, 35, 34, 22, 21, 43, 35, 36, 24, 30, 33, 25, 34, 31, 35, 22, 20, 26, 22, 29, 35, 24, 28, 32, 22, 30, 26, 34, 31, 28, 35, 36, 34, 22, 24, 31, 32]
  },
  "Exodus": {
    "chapters": 40,
    "verses": [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 21, 22, 28, 27, 24, 16, 16, 25, 26, 30, 30, 22, 18, 20, 34, 31, 22, 23, 27, 21, 30, 35, 35, 38, 29, 35, 36, 24, 29, 46]
  },
  "Leviticus": {
    "chapters": 27,
    "verses": [17, 2, 17, 7, 23, 27, 27, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 23, 25, 40, 24, 34]
  },
  "Numbers": {
    "chapters": 36,
    "verses": [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 13, 22, 29, 30, 42, 31, 25, 65, 14, 13, 34, 30, 16, 31, 35, 36, 22, 30, 33, 55, 34, 24]
  },
  "Deuteronomy": {
    "chapters": 34,
    "verses": [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 31, 18, 25, 23, 22, 20, 22, 25, 20, 30, 30, 29, 25, 24, 26, 26, 29, 29, 30, 30, 24, 29, 47]
  },
  "Joshua": {
    "chapters": 24,
    "verses": [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 25, 15, 63, 10, 18, 28, 21, 43, 16, 25, 13, 23]
  },
  "Judges": {
    "chapters": 21,
    "verses": [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 23, 30, 48, 25]
  },
  "Ruth": {
    "chapters": 4,
    "verses": [22, 23, 18, 22]
  },
  "1 Samuel": {
    "chapters": 31,
    "verses": [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 23, 35, 23, 58, 21, 24, 42, 15, 23, 29, 22, 25, 25, 25, 30, 11, 26, 25]
  },
  "2 Samuel": {
    "chapters": 24,
    "verses": [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 34, 37, 23, 29, 33, 43, 26, 25, 54, 24, 25]
  },
  "1 Kings": {
    "chapters": 22,
    "verses": [53, 46, 28, 34, 18, 38, 51, 66, 24, 29, 43, 24, 33, 31, 34, 34, 24, 46, 46, 43, 26, 53]
  },
  "2 Kings": {
    "chapters": 25,
    "verses": [18, 25, 27, 44, 18, 32, 20, 29, 37, 36, 21, 21, 25, 29, 38, 24, 41, 37, 38, 21, 25, 20, 25, 25, 30]
  },
  "1 Chronicles": {
    "chapters": 29,
    "verses": [54, 55, 24, 40, 26, 81, 40, 40, 44, 34, 47, 40, 43, 17, 29, 43, 27, 17, 32, 30, 25, 26, 34, 31, 27, 25, 34, 34, 30]
  },
  "2 Chronicles": {
    "chapters": 36,
    "verses": [17, 18, 17, 22, 14, 42, 22, 18, 47, 19, 20, 16, 14, 15, 18, 14, 19, 35, 35, 26, 20, 12, 21, 27, 28, 27, 20, 27, 32, 27, 25, 28, 25, 31, 27, 23]
  },
  "Ezra": {
    "chapters": 10,
    "verses": [11, 70, 13, 24, 20, 22, 28, 36, 15, 44]
  },
  "Nehemiah": {
    "chapters": 13,
    "verses": [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31]
  },
  "Esther": {
    "chapters": 10,
    "verses": [22, 23, 15, 17, 14, 14, 10, 17, 32, 3]
  },
  "Job": {
    "chapters": 42,
    "verses": [21, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 30, 22, 35, 22, 17, 21, 29, 31, 40, 17, 18, 29, 25, 14, 21, 28, 30, 31, 37, 24, 26, 23, 24, 25, 22, 26, 21, 27, 23, 30]
  },
  "Psalms": {
    "chapters": 150,
    "verses": []
  },
  "Proverbs": {
    "chapters": 31,
    "verses": [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 24, 28, 27, 29, 30, 22, 29, 35, 34, 26, 28, 27, 29, 27, 31, 10]
  },
  "Ecclesiastes": {
    "chapters": 12,
    "verses": [18, 26, 22, 16, 20, 12, 29, 10, 18, 20, 10, 14]
  },
  "Song of Solomon": {
    "chapters": 8,
    "verses": [17, 17, 11, 16, 16, 13, 13, 14]
  },
  "Isaiah": {
    "chapters": 66,
    "verses": [31, 22, 26, 23, 30, 13, 25, 23, 21, 34, 16, 22, 25, 32, 25, 14, 14, 22, 25, 28, 24, 23, 22, 23, 25, 22, 14, 25, 24, 31, 31, 20, 22, 22, 25, 24, 28, 29, 24, 31, 25, 24, 25, 30, 24, 22, 25, 28, 25, 23, 25, 25, 26, 29, 32, 22, 25, 25, 28, 25, 31, 25, 30, 31, 26, 22, 25, 25, 25, 28, 31, 25, 25, 28]
  },
  "Jeremiah": {
    "chapters": 52,
    "verses": [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 24, 17, 22, 22, 21, 25, 27, 23, 15, 18, 14, 30, 25, 20, 32, 24, 22, 22, 25, 24, 31, 22, 25, 29, 22, 25, 22, 20, 24, 22, 25, 25, 25, 28, 22, 22, 20, 27, 25, 26, 24, 28, 25, 29, 22, 25, 24, 25, 31, 25, 25, 25, 22, 24, 25, 25, 25, 30]
  },
  "Lamentations": {
    "chapters": 5,
    "verses": [22, 22, 66, 22, 22]
  },
  "Ezekiel": {
    "chapters": 48,
    "verses": [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 29, 49, 32, 31, 22, 31, 25, 25, 25, 23, 22, 29, 25, 22, 25, 25, 24, 30, 28, 25, 22, 25, 25, 25, 28, 25, 29, 25, 25, 25, 27, 22, 25, 25, 25]
  },
  "Daniel": {
    "chapters": 12,
    "verses": [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13]
  },
  "Hosea": {
    "chapters": 14,
    "verses": [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9]
  },
  "Joel": {
    "chapters": 3,
    "verses": [20, 32, 21]
  },
  "Amos": {
    "chapters": 9,
    "verses": [15, 16, 15, 13, 27, 17, 17, 14, 15]
  },
  "Obadiah": {
    "chapters": 1,
    "verses": [21]
  },
  "Jonah": {
    "chapters": 4,
    "verses": [17, 10, 10, 11]
  },
  "Micah": {
    "chapters": 7,
    "verses": [16, 13, 12, 13, 15, 16, 20]
  },
  "Nahum": {
    "chapters": 3,
    "verses": [15, 13, 19]
  },
  "Habakkuk": {
    "chapters": 3,
    "verses": [17, 20, 19]
  },
  "Zephaniah": {
    "chapters": 3,
    "verses": [18, 15, 20]
  },
  "Haggai": {
    "chapters": 2,
    "verses": [15, 23]
  },
  "Zechariah": {
    "chapters": 14,
    "verses": [21, 13, 10, 14, 15, 15, 14, 23, 17, 12, 17, 14, 9, 21]
  },
  "Malachi": {
    "chapters": 4,
    "verses": [11, 17, 18, 18]
  },
  "Matthew": {
    "chapters": 28,
    "verses": [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 46, 25, 35]
  },
  "Mark": {
    "chapters": 16,
    "verses": [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20]
  },
  "Luke": {
    "chapters": 24,
    "verses": [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 45, 47, 38, 53, 56, 44]
  },
  "John": {
    "chapters": 21,
    "verses": [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25]
  },
  "Acts": {
    "chapters": 28,
    "verses": [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 22, 41, 38, 40, 30, 35, 31, 22, 30, 31, 31]
  },
  "Romans": {
    "chapters": 16,
    "verses": [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27]
  },
  "1 Corinthians": {
    "chapters": 16,
    "verses": [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24]
  },
  "2 Corinthians": {
    "chapters": 13,
    "verses": [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14]
  },
  "Galatians": {
    "chapters": 6,
    "verses": [24, 21, 29, 31, 26, 18]
  },
  "Ephesians": {
    "chapters": 6,
    "verses": [23, 22, 21, 32, 33, 24]
  },
  "Philippians": {
    "chapters": 4,
    "verses": [30, 30, 21, 23]
  },
  "Colossians": {
    "chapters": 4,
    "verses": [29, 23, 25, 18]
  },
  "1 Thessalonians": {
    "chapters": 5,
    "verses": [10, 20, 13, 18, 28]
  },
  "2 Thessalonians": {
    "chapters": 3,
    "verses": [12, 17, 18]
  },
  "1 Timothy": {
    "chapters": 6,
    "verses": [20, 15, 16, 16, 25, 21]
  },
  "2 Timothy": {
    "chapters": 4,
    "verses": [18, 26, 17, 22]
  },
  "Titus": {
    "chapters": 3,
    "verses": [16, 15, 15]
  },
  "Philemon": {
    "chapters": 1,
    "verses": [25]
  },
  "Hebrews": {
    "chapters": 13,
    "verses": [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25]
  },
  "James": {
    "chapters": 5,
    "verses": [27, 26, 18, 17, 20]
  },
  "1 Peter": {
    "chapters": 5,
    "verses": [25, 25, 22, 19, 14]
  },
  "2 Peter": {
    "chapters": 3,
    "verses": [21, 22, 18]
  },
  "1 John": {
    "chapters": 5,
    "verses": [10, 29, 24, 21, 21]
  },
  "2 John": {
    "chapters": 1,
    "verses": [13]
  },
  "3 John": {
    "chapters": 1,
    "verses": [14]
  },
  "Jude": {
    "chapters": 1,
    "verses": [25]
  },
  "Revelation": {
    "chapters": 22,
    "verses": [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 21, 21]
  }
}