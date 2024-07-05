// IP Joint data
const IPData = [
    { flexion: '<-30', dtFlexion: 15, extension: '<-80', dtExtension: 15, ankylosis: '<-30', dtAnkylosis: 15 },
    { flexion: -30, dtFlexion: 15, extension: -80, dtExtension: 15, ankylosis: -30, dtAnkylosis: 15 },
    { flexion: -29, dtFlexion: 15, extension: -79, dtExtension: 15, ankylosis: -29, dtAnkylosis: 15 },
    { flexion: -28, dtFlexion: 15, extension: -78, dtExtension: 15, ankylosis: -28, dtAnkylosis: 15 },
    { flexion: -27, dtFlexion: 14, extension: -77, dtExtension: 14, ankylosis: -27, dtAnkylosis: 14 },
    { flexion: -26, dtFlexion: 14, extension: -76, dtExtension: 14, ankylosis: -26, dtAnkylosis: 14 },
    { flexion: -25, dtFlexion: 14, extension: -75, dtExtension: 14, ankylosis: -25, dtAnkylosis: 14 },
    { flexion: -24, dtFlexion: 14, extension: -74, dtExtension: 14, ankylosis: -24, dtAnkylosis: 14 },
    { flexion: -23, dtFlexion: 14, extension: -73, dtExtension: 14, ankylosis: -23, dtAnkylosis: 14 },
    { flexion: -22, dtFlexion: 13, extension: -72, dtExtension: 13, ankylosis: -22, dtAnkylosis: 13 },
    { flexion: -21, dtFlexion: 13, extension: -71, dtExtension: 13, ankylosis: -21, dtAnkylosis: 13 },
    { flexion: -20, dtFlexion: 13, extension: -70, dtExtension: 13, ankylosis: -20, dtAnkylosis: 13 },
    { flexion: -19, dtFlexion: 13, extension: -69, dtExtension: 13, ankylosis: -19, dtAnkylosis: 13 },
    { flexion: -18, dtFlexion: 13, extension: -68, dtExtension: 13, ankylosis: -18, dtAnkylosis: 13 },
    { flexion: -17, dtFlexion: 12, extension: -67, dtExtension: 12, ankylosis: -17, dtAnkylosis: 12 },
    { flexion: -16, dtFlexion: 12, extension: -66, dtExtension: 12, ankylosis: -16, dtAnkylosis: 12 },
    { flexion: -15, dtFlexion: 12, extension: -65, dtExtension: 12, ankylosis: -15, dtAnkylosis: 12 },
    { flexion: -14, dtFlexion: 12, extension: -64, dtExtension: 12, ankylosis: -14, dtAnkylosis: 12 },
    { flexion: -13, dtFlexion: 12, extension: -63, dtExtension: 12, ankylosis: -13, dtAnkylosis: 12 },
    { flexion: -12, dtFlexion: 11, extension: -62, dtExtension: 11, ankylosis: -12, dtAnkylosis: 11 },
    { flexion: -11, dtFlexion: 11, extension: -61, dtExtension: 11, ankylosis: -11, dtAnkylosis: 11 },
    { flexion: -10, dtFlexion: 11, extension: -60, dtExtension: 11, ankylosis: -10, dtAnkylosis: 11 },
    { flexion: -9, dtFlexion: 11, extension: -59, dtExtension: 11, ankylosis: -9, dtAnkylosis: 11 },
    { flexion: -8, dtFlexion: 10, extension: -58, dtExtension: 11, ankylosis: -8, dtAnkylosis: 11 },
    { flexion: -7, dtFlexion: 10, extension: -57, dtExtension: 10, ankylosis: -7, dtAnkylosis: 10 },
    { flexion: -6, dtFlexion: 10, extension: -56, dtExtension: 10, ankylosis: -6, dtAnkylosis: 10 },
    { flexion: -5, dtFlexion: 10, extension: -55, dtExtension: 10, ankylosis: -5, dtAnkylosis: 10 },
    { flexion: -4, dtFlexion: 9, extension: -54, dtExtension: 10, ankylosis: -4, dtAnkylosis: 10 },
    { flexion: -3, dtFlexion: 9, extension: -53, dtExtension: 10, ankylosis: -3, dtAnkylosis: 10 },
    { flexion: -2, dtFlexion: 9, extension: -52, dtExtension: 9, ankylosis: -2, dtAnkylosis: 9 },
    { flexion: -1, dtFlexion: 8, extension: -51, dtExtension: 9, ankylosis: -1, dtAnkylosis: 9 },
    { flexion: 0, dtFlexion: 8, extension: -50, dtExtension: 9, ankylosis: 0, dtAnkylosis: 9 },
    { flexion: 1, dtFlexion: 8, extension: -49, dtExtension: 9, ankylosis: 1, dtAnkylosis: 9 },
    { flexion: 2, dtFlexion: 8, extension: -48, dtExtension: 9, ankylosis: 2, dtAnkylosis: 9 },
    { flexion: 3, dtFlexion: 7, extension: -47, dtExtension: 8, ankylosis: 3, dtAnkylosis: 9 },
    { flexion: 4, dtFlexion: 7, extension: -46, dtExtension: 8, ankylosis: 4, dtAnkylosis: 9 },
    { flexion: 5, dtFlexion: 7, extension: -45, dtExtension: 8, ankylosis: 5, dtAnkylosis: 9 },
    { flexion: 6, dtFlexion: 7, extension: -44, dtExtension: 8, ankylosis: 6, dtAnkylosis: 8 },
    { flexion: 7, dtFlexion: 7, extension: -43, dtExtension: 8, ankylosis: 7, dtAnkylosis: 8 },
    { flexion: 8, dtFlexion: 6, extension: -42, dtExtension: 7, ankylosis: 8, dtAnkylosis: 8 },
    { flexion: 9, dtFlexion: 6, extension: -41, dtExtension: 7, ankylosis: 9, dtAnkylosis: 8 },
    { flexion: 10, dtFlexion: 6, extension: -40, dtExtension: 7, ankylosis: 10, dtAnkylosis: 8 },
    { flexion: 11, dtFlexion: 6, extension: -39, dtExtension: 7, ankylosis: 11, dtAnkylosis: 8 },
    { flexion: 12, dtFlexion: 6, extension: -38, dtExtension: 7, ankylosis: 12, dtAnkylosis: 8 },
    { flexion: 13, dtFlexion: 5, extension: -37, dtExtension: 6, ankylosis: 13, dtAnkylosis: 8 },
    { flexion: 14, dtFlexion: 5, extension: -36, dtExtension: 6, ankylosis: 14, dtAnkylosis: 8 },
    { flexion: 15, dtFlexion: 5, extension: -35, dtExtension: 6, ankylosis: 15, dtAnkylosis: 8 },
    { flexion: 16, dtFlexion: 5, extension: -34, dtExtension: 6, ankylosis: 16, dtAnkylosis: 7 },
    { flexion: 17, dtFlexion: 5, extension: -33, dtExtension: 6, ankylosis: 17, dtAnkylosis: 7 },
    { flexion: 18, dtFlexion: 4, extension: -32, dtExtension: 5, ankylosis: 18, dtAnkylosis: 7 },
    { flexion: 19, dtFlexion: 4, extension: -31, dtExtension: 5, ankylosis: 19, dtAnkylosis: 7 },
    { flexion: 20, dtFlexion: 4, extension: -30, dtExtension: 5, ankylosis: 20, dtAnkylosis: 7 },
    { flexion: 21, dtFlexion: 4, extension: -29, dtExtension: 5, ankylosis: 21, dtAnkylosis: 7 },
    { flexion: 22, dtFlexion: 4, extension: -28, dtExtension: 5, ankylosis: 22, dtAnkylosis: 7 },
    { flexion: 23, dtFlexion: 4, extension: -27, dtExtension: 4, ankylosis: 23, dtAnkylosis: 8 },
    { flexion: 24, dtFlexion: 4, extension: -26, dtExtension: 4, ankylosis: 24, dtAnkylosis: 8 },
    { flexion: 25, dtFlexion: 4, extension: -25, dtExtension: 4, ankylosis: 25, dtAnkylosis: 8 },
    { flexion: 26, dtFlexion: 4, extension: -24, dtExtension: 4, ankylosis: 26, dtAnkylosis: 8 },
    { flexion: 27, dtFlexion: 4, extension: -23, dtExtension: 4, ankylosis: 27, dtAnkylosis: 8 },
    { flexion: 28, dtFlexion: 4, extension: -22, dtExtension: 3, ankylosis: 28, dtAnkylosis: 9 },
    { flexion: 29, dtFlexion: 4, extension: -21, dtExtension: 3, ankylosis: 29, dtAnkylosis: 9 },
    { flexion: 30, dtFlexion: 4, extension: -20, dtExtension: 3, ankylosis: 30, dtAnkylosis: 9 },
    { flexion: 31, dtFlexion: 4, extension: -19, dtExtension: 3, ankylosis: 31, dtAnkylosis: 9 },
    { flexion: 32, dtFlexion: 4, extension: -18, dtExtension: 3, ankylosis: 32, dtAnkylosis: 9 },
    { flexion: 33, dtFlexion: 4, extension: -17, dtExtension: 3, ankylosis: 33, dtAnkylosis: 9 },
    { flexion: 34, dtFlexion: 4, extension: -16, dtExtension: 3, ankylosis: 34, dtAnkylosis: 9 },
    { flexion: 35, dtFlexion: 4, extension: -15, dtExtension: 3, ankylosis: 35, dtAnkylosis: 10 },
    { flexion: 36, dtFlexion: 3, extension: -14, dtExtension: 2, ankylosis: 36, dtAnkylosis: 10 },
    { flexion: 37, dtFlexion: 3, extension: -13, dtExtension: 2, ankylosis: 37, dtAnkylosis: 10 },
    { flexion: 38, dtFlexion: 3, extension: -12, dtExtension: 2, ankylosis: 38, dtAnkylosis: 10 },
    { flexion: 39, dtFlexion: 3, extension: -11, dtExtension: 2, ankylosis: 39, dtAnkylosis: 10 },
    { flexion: 40, dtFlexion: 3, extension: -10, dtExtension: 2, ankylosis: 40, dtAnkylosis: 10 },
    { flexion: 41, dtFlexion: 3, extension: -9, dtExtension: 2, ankylosis: 41, dtAnkylosis: 10 },
    { flexion: 42, dtFlexion: 3, extension: -8, dtExtension: 2, ankylosis: 42, dtAnkylosis: 10 },
    { flexion: 43, dtFlexion: 3, extension: -7, dtExtension: 2, ankylosis: 43, dtAnkylosis: 10 },
    { flexion: 44, dtFlexion: 3, extension: -6, dtExtension: 2, ankylosis: 44, dtAnkylosis: 10 },
    { flexion: 45, dtFlexion: 3, extension: -5, dtExtension: 2, ankylosis: 45, dtAnkylosis: 11 },
    { flexion: 46, dtFlexion: 2, extension: -4, dtExtension: 1, ankylosis: 46, dtAnkylosis: 11 },
    { flexion: 47, dtFlexion: 2, extension: -3, dtExtension: 1, ankylosis: 47, dtAnkylosis: 11 },
    { flexion: 48, dtFlexion: 2, extension: -2, dtExtension: 1, ankylosis: 48, dtAnkylosis: 11 },
    { flexion: 49, dtFlexion: 2, extension: -1, dtExtension: 1, ankylosis: 49, dtAnkylosis: 11 },
    { flexion: 50, dtFlexion: 2, extension: 0, dtExtension: 1, ankylosis: 50, dtAnkylosis: 11 },
    { flexion: 51, dtFlexion: 2, extension: 1, dtExtension: 1, ankylosis: 51, dtAnkylosis: 11 },
    { flexion: 52, dtFlexion: 2, extension: 2, dtExtension: 1, ankylosis: 52, dtAnkylosis: 11 },
    { flexion: 53, dtFlexion: 2, extension: 3, dtExtension: 1, ankylosis: 53, dtAnkylosis: 11 },
    { flexion: 54, dtFlexion: 2, extension: 4, dtExtension: 1, ankylosis: 54, dtAnkylosis: 11 },
    { flexion: 55, dtFlexion: 2, extension: 5, dtExtension: 1, ankylosis: 55, dtAnkylosis: 12 },
    { flexion: 56, dtFlexion: 1, extension: 6, dtExtension: 0, ankylosis: 56, dtAnkylosis: 12 },
    { flexion: 57, dtFlexion: 1, extension: 7, dtExtension: 0, ankylosis: 57, dtAnkylosis: 12 },
    { flexion: 58, dtFlexion: 1, extension: 8, dtExtension: 0, ankylosis: 58, dtAnkylosis: 12 },
    { flexion: 59, dtFlexion: 1, extension: 9, dtExtension: 0, ankylosis: 59, dtAnkylosis: 12 },
    { flexion: 60, dtFlexion: 1, extension: 10, dtExtension: 0, ankylosis: 60, dtAnkylosis: 12 },
    { flexion: 61, dtFlexion: 1, extension: 11, dtExtension: 0, ankylosis: 61, dtAnkylosis: 12 },
    { flexion: 62, dtFlexion: 1, extension: 12, dtExtension: 0, ankylosis: 62, dtAnkylosis: 12 },
    { flexion: 63, dtFlexion: 1, extension: 13, dtExtension: 0, ankylosis: 63, dtAnkylosis: 13 },
    { flexion: 64, dtFlexion: 1, extension: 14, dtExtension: 0, ankylosis: 64, dtAnkylosis: 13 },
    { flexion: 65, dtFlexion: 1, extension: 15, dtExtension: 0, ankylosis: 65, dtAnkylosis: 13 },
    { flexion: 66, dtFlexion: 1, extension: 16, dtExtension: 0, ankylosis: 66, dtAnkylosis: 13 },
    { flexion: 67, dtFlexion: 1, extension: 17, dtExtension: 0, ankylosis: 67, dtAnkylosis: 13 },
    { flexion: 68, dtFlexion: 1, extension: 18, dtExtension: 0, ankylosis: 68, dtAnkylosis: 14 },
    { flexion: 69, dtFlexion: 1, extension: 19, dtExtension: 0, ankylosis: 69, dtAnkylosis: 14 },
    { flexion: 70, dtFlexion: 1, extension: 20, dtExtension: 0, ankylosis: 70, dtAnkylosis: 14 },
    { flexion: 71, dtFlexion: 1, extension: 21, dtExtension: 0, ankylosis: 71, dtAnkylosis: 14 },
    { flexion: 72, dtFlexion: 1, extension: 22, dtExtension: 0, ankylosis: 72, dtAnkylosis: 14 },
    { flexion: 73, dtFlexion: 1, extension: 23, dtExtension: 0, ankylosis: 73, dtAnkylosis: 14 },
    { flexion: 74, dtFlexion: 1, extension: 24, dtExtension: 0, ankylosis: 74, dtAnkylosis: 14 },
    { flexion: 75, dtFlexion: 1, extension: 25, dtExtension: 0, ankylosis: 75, dtAnkylosis: 15 },
    { flexion: 76, dtFlexion: 0, extension: 26, dtExtension: 0, ankylosis: 76, dtAnkylosis: 15 },
    { flexion: 77, dtFlexion: 0, extension: 27, dtExtension: 0, ankylosis: 77, dtAnkylosis: 15 },
    { flexion: 78, dtFlexion: 0, extension: 28, dtExtension: 0, ankylosis: 78, dtAnkylosis: 15 },
    { flexion: 79, dtFlexion: 0, extension: 29, dtExtension: 0, ankylosis: 79, dtAnkylosis: 15 },
    { flexion: 80, dtFlexion: 0, extension: 30, dtExtension: 0, ankylosis: 80, dtAnkylosis: 15 },
    { flexion: '>80', dtFlexion: 0, extension: '>30', dtExtension: 0, ankylosis: '>80', dtAnkylosis: 15 }
];

// MP Joint data
const MPData = [
    { flexion: '<-40', dtFlexion: 10, extension: '<-60', dtExtension: 10, ankylosis: '<-40', dtAnkylosis: 10 },
    { flexion: -40, dtFlexion: 10, extension: -60, dtExtension: 10, ankylosis: -40, dtAnkylosis: 10 },
    { flexion: -39, dtFlexion: 10, extension: -59, dtExtension: 10, ankylosis: -39, dtAnkylosis: 10 },
    { flexion: -38, dtFlexion: 10, extension: -58, dtExtension: 10, ankylosis: -38, dtAnkylosis: 10 },
    { flexion: -37, dtFlexion: 10, extension: -57, dtExtension: 9, ankylosis: -37, dtAnkylosis: 10 },
    { flexion: -36, dtFlexion: 10, extension: -56, dtExtension: 9, ankylosis: -36, dtAnkylosis: 10 },
    { flexion: -35, dtFlexion: 10, extension: -55, dtExtension: 9, ankylosis: -35, dtAnkylosis: 10 },
    { flexion: -34, dtFlexion: 9, extension: -54, dtExtension: 9, ankylosis: -34, dtAnkylosis: 9 },
    { flexion: -33, dtFlexion: 9, extension: -53, dtExtension: 9, ankylosis: -33, dtAnkylosis: 9 },
    { flexion: -32, dtFlexion: 9, extension: -52, dtExtension: 8, ankylosis: -32, dtAnkylosis: 9 },
    { flexion: -31, dtFlexion: 9, extension: -51, dtExtension: 8, ankylosis: -31, dtAnkylosis: 9 },
    { flexion: -30, dtFlexion: 9, extension: -50, dtExtension: 8, ankylosis: -30, dtAnkylosis: 9 },
    { flexion: -29, dtFlexion: 9, extension: -49, dtExtension: 8, ankylosis: -29, dtAnkylosis: 9 },
    { flexion: -28, dtFlexion: 9, extension: -48, dtExtension: 7, ankylosis: -28, dtAnkylosis: 9 },
    { flexion: -27, dtFlexion: 9, extension: -47, dtExtension: 7, ankylosis: -27, dtAnkylosis: 9 },
    { flexion: -26, dtFlexion: 9, extension: -46, dtExtension: 7, ankylosis: -26, dtAnkylosis: 9 },
    { flexion: -25, dtFlexion: 9, extension: -45, dtExtension: 7, ankylosis: -25, dtAnkylosis: 9 },
    { flexion: -24, dtFlexion: 8, extension: -44, dtExtension: 6, ankylosis: -24, dtAnkylosis: 8 },
    { flexion: -23, dtFlexion: 8, extension: -43, dtExtension: 6, ankylosis: -23, dtAnkylosis: 8 },
    { flexion: -22, dtFlexion: 8, extension: -42, dtExtension: 6, ankylosis: -22, dtAnkylosis: 8 },
    { flexion: -21, dtFlexion: 8, extension: -41, dtExtension: 5, ankylosis: -21, dtAnkylosis: 8 },
    { flexion: -20, dtFlexion: 8, extension: -40, dtExtension: 5, ankylosis: -20, dtAnkylosis: 8 },
    { flexion: -19, dtFlexion: 8, extension: -39, dtExtension: 5, ankylosis: -19, dtAnkylosis: 8 },
    { flexion: -18, dtFlexion: 8, extension: -38, dtExtension: 5, ankylosis: -18, dtAnkylosis: 8 },
    { flexion: -17, dtFlexion: 8, extension: -37, dtExtension: 4, ankylosis: -17, dtAnkylosis: 8 },
    { flexion: -16, dtFlexion: 8, extension: -36, dtExtension: 4, ankylosis: -16, dtAnkylosis: 8 },
    { flexion: -15, dtFlexion: 8, extension: -35, dtExtension: 4, ankylosis: -15, dtAnkylosis: 8 },
    { flexion: -14, dtFlexion: 7, extension: -34, dtExtension: 4, ankylosis: -14, dtAnkylosis: 7 },
    { flexion: -13, dtFlexion: 7, extension: -33, dtExtension: 4, ankylosis: -13, dtAnkylosis: 7 },
    { flexion: -12, dtFlexion: 7, extension: -32, dtExtension: 3, ankylosis: -12, dtAnkylosis: 7 },
    { flexion: -11, dtFlexion: 7, extension: -31, dtExtension: 3, ankylosis: -11, dtAnkylosis: 7 },
    { flexion: -10, dtFlexion: 7, extension: -30, dtExtension: 3, ankylosis: -10, dtAnkylosis: 7 },
    { flexion: -9, dtFlexion: 7, extension: -29, dtExtension: 3, ankylosis: -9, dtAnkylosis: 7 },
    { flexion: -8, dtFlexion: 7, extension: -28, dtExtension: 3, ankylosis: -8, dtAnkylosis: 7 },
    { flexion: -7, dtFlexion: 7, extension: -27, dtExtension: 2, ankylosis: -7, dtAnkylosis: 7 },
    { flexion: -6, dtFlexion: 7, extension: -26, dtExtension: 2, ankylosis: -6, dtAnkylosis: 7 },
    { flexion: -5, dtFlexion: 7, extension: -25, dtExtension: 2, ankylosis: -5, dtAnkylosis: 7 },
    { flexion: -4, dtFlexion: 6, extension: -24, dtExtension: 2, ankylosis: -4, dtAnkylosis: 6 },
    { flexion: -3, dtFlexion: 6, extension: -23, dtExtension: 2, ankylosis: -3, dtAnkylosis: 6 },
    { flexion: -2, dtFlexion: 6, extension: -22, dtExtension: 1, ankylosis: -2, dtAnkylosis: 6 },
    { flexion: -1, dtFlexion: 6, extension: -21, dtExtension: 1, ankylosis: -1, dtAnkylosis: 6 },
    { flexion: 0, dtFlexion: 6, extension: -20, dtExtension: 1, ankylosis: 0, dtAnkylosis: 6 },
    { flexion: 1, dtFlexion: 6, extension: -19, dtExtension: 1, ankylosis: 1, dtAnkylosis: 6 },
    { flexion: 2, dtFlexion: 6, extension: -18, dtExtension: 1, ankylosis: 2, dtAnkylosis: 6 },
    { flexion: 3, dtFlexion: 6, extension: -17, dtExtension: 1, ankylosis: 3, dtAnkylosis: 6 },
    { flexion: 4, dtFlexion: 6, extension: -16, dtExtension: 1, ankylosis: 4, dtAnkylosis: 6 },
    { flexion: 5, dtFlexion: 6, extension: -15, dtExtension: 1, ankylosis: 5, dtAnkylosis: 6 },
    { flexion: 6, dtFlexion: 5, extension: -14, dtExtension: 1, ankylosis: 6, dtAnkylosis: 6 },
    { flexion: 7, dtFlexion: 5, extension: -13, dtExtension: 1, ankylosis: 7, dtAnkylosis: 6 },
    { flexion: 8, dtFlexion: 5, extension: -12, dtExtension: 1, ankylosis: 8, dtAnkylosis: 6 },
    { flexion: 9, dtFlexion: 5, extension: -11, dtExtension: 1, ankylosis: 9, dtAnkylosis: 6 },
    { flexion: 10, dtFlexion: 5, extension: -10, dtExtension: 1, ankylosis: 10, dtAnkylosis: 6 },
    { flexion: 11, dtFlexion: 5, extension: -9, dtExtension: 1, ankylosis: 11, dtAnkylosis: 6 },
    { flexion: 12, dtFlexion: 5, extension: -8, dtExtension: 1, ankylosis: 12, dtAnkylosis: 6 },
    { flexion: 13, dtFlexion: 5, extension: -7, dtExtension: 1, ankylosis: 13, dtAnkylosis: 6 },
    { flexion: 14, dtFlexion: 5, extension: -6, dtExtension: 1, ankylosis: 14, dtAnkylosis: 6 },
    { flexion: 15, dtFlexion: 5, extension: -5, dtExtension: 1, ankylosis: 15, dtAnkylosis: 6 },
    { flexion: 16, dtFlexion: 4, extension: -4, dtExtension: 0, ankylosis: 16, dtAnkylosis: 5 },
    { flexion: 17, dtFlexion: 4, extension: -3, dtExtension: 0, ankylosis: 17, dtAnkylosis: 5 },
    { flexion: 18, dtFlexion: 4, extension: -2, dtExtension: 0, ankylosis: 18, dtAnkylosis: 5 },
    { flexion: 19, dtFlexion: 4, extension: -1, dtExtension: 0, ankylosis: 19, dtAnkylosis: 5 },
    { flexion: 20, dtFlexion: 4, extension: -0, dtExtension: 0, ankylosis: 20, dtAnkylosis: 5 },
    { flexion: 21, dtFlexion: 4, extension: 1, dtExtension: 0, ankylosis: 21, dtAnkylosis: 5 },
    { flexion: 22, dtFlexion: 4, extension: 2, dtExtension: 0, ankylosis: 22, dtAnkylosis: 5 },
    { flexion: 23, dtFlexion: 4, extension: 3, dtExtension: 0, ankylosis: 23, dtAnkylosis: 5 },
    { flexion: 24, dtFlexion: 4, extension: 4, dtExtension: 0, ankylosis: 24, dtAnkylosis: 5 },
    { flexion: 25, dtFlexion: 4, extension: 5, dtExtension: 0, ankylosis: 25, dtAnkylosis: 6 },
    { flexion: 26, dtFlexion: 3, extension: 6, dtExtension: 0, ankylosis: 26, dtAnkylosis: 6 },
    { flexion: 27, dtFlexion: 3, extension: 7, dtExtension: 0, ankylosis: 27, dtAnkylosis: 6 },
    { flexion: 28, dtFlexion: 3, extension: 8, dtExtension: 0, ankylosis: 28, dtAnkylosis: 6 },
    { flexion: 29, dtFlexion: 3, extension: 9, dtExtension: 0, ankylosis: 29, dtAnkylosis: 6 },
    { flexion: 30, dtFlexion: 3, extension: 10, dtExtension: 0, ankylosis: 30, dtAnkylosis: 6 },
    { flexion: 31, dtFlexion: 3, extension: 11, dtExtension: 0, ankylosis: 31, dtAnkylosis: 6 },
    { flexion: 32, dtFlexion: 3, extension: 12, dtExtension: 0, ankylosis: 32, dtAnkylosis: 6 },
    { flexion: 33, dtFlexion: 3, extension: 13, dtExtension: 0, ankylosis: 33, dtAnkylosis: 6 },
    { flexion: 34, dtFlexion: 3, extension: 14, dtExtension: 0, ankylosis: 34, dtAnkylosis: 6 },
    { flexion: 35, dtFlexion: 3, extension: 15, dtExtension: 0, ankylosis: 35, dtAnkylosis: 7 },
    { flexion: 36, dtFlexion: 2, extension: 16, dtExtension: 0, ankylosis: 36, dtAnkylosis: 7 },
    { flexion: 37, dtFlexion: 2, extension: 17, dtExtension: 0, ankylosis: 37, dtAnkylosis: 7 },
    { flexion: 38, dtFlexion: 2, extension: 18, dtExtension: 0, ankylosis: 38, dtAnkylosis: 7 },
    { flexion: 39, dtFlexion: 2, extension: 19, dtExtension: 0, ankylosis: 39, dtAnkylosis: 7 },
    { flexion: 40, dtFlexion: 2, extension: 20, dtExtension: 0, ankylosis: 40, dtAnkylosis: 7 },
    { flexion: 41, dtFlexion: 2, extension: 21, dtExtension: 0, ankylosis: 41, dtAnkylosis: 7 },
    { flexion: 42, dtFlexion: 2, extension: 22, dtExtension: 0, ankylosis: 42, dtAnkylosis: 7 },
    { flexion: 43, dtFlexion: 2, extension: 23, dtExtension: 0, ankylosis: 43, dtAnkylosis: 8 },
    { flexion: 44, dtFlexion: 2, extension: 24, dtExtension: 0, ankylosis: 44, dtAnkylosis: 8 },
    { flexion: 45, dtFlexion: 2, extension: 25, dtExtension: 0, ankylosis: 45, dtAnkylosis: 8 },
    { flexion: 46, dtFlexion: 1, extension: 26, dtExtension: 0, ankylosis: 46, dtAnkylosis: 8 },
    { flexion: 47, dtFlexion: 1, extension: 27, dtExtension: 0, ankylosis: 47, dtAnkylosis: 8 },
    { flexion: 48, dtFlexion: 1, extension: 28, dtExtension: 0, ankylosis: 48, dtAnkylosis: 9 },
    { flexion: 49, dtFlexion: 1, extension: 29, dtExtension: 0, ankylosis: 49, dtAnkylosis: 9 },
    { flexion: 50, dtFlexion: 1, extension: 30, dtExtension: 0, ankylosis: 50, dtAnkylosis: 9 },
    { flexion: 51, dtFlexion: 1, extension: 31, dtExtension: 0, ankylosis: 51, dtAnkylosis: 9 },
    { flexion: 52, dtFlexion: 1, extension: 32, dtExtension: 0, ankylosis: 52, dtAnkylosis: 9 },
    { flexion: 53, dtFlexion: 1, extension: 33, dtExtension: 0, ankylosis: 53, dtAnkylosis: 9 },
    { flexion: 54, dtFlexion: 1, extension: 34, dtExtension: 0, ankylosis: 54, dtAnkylosis: 9 },
    { flexion: 55, dtFlexion: 1, extension: 35, dtExtension: 0, ankylosis: 55, dtAnkylosis: 10 },
    { flexion: 56, dtFlexion: 0, extension: 36, dtExtension: 0, ankylosis: 56, dtAnkylosis: 10 },
    { flexion: 57, dtFlexion: 0, extension: 37, dtExtension: 0, ankylosis: 57, dtAnkylosis: 10 },
    { flexion: 58, dtFlexion: 0, extension: 38, dtExtension: 0, ankylosis: 58, dtAnkylosis: 10 },
    { flexion: 59, dtFlexion: 0, extension: 39, dtExtension: 0, ankylosis: 59, dtAnkylosis: 10 },
    { flexion: 60, dtFlexion: 0, extension: 40, dtExtension: 0, ankylosis: 60, dtAnkylosis: 10 },
    { flexion: '>60', dtFlexion: 0, extension: '>40', dtExtension: 0, ankylosis: '>60', dtAnkylosis: 10 }
];

// CMC Joint Radial Abduction data
const RADIALABDUCTIONData = [
    { radialAbduction: '<15', dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 15, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 16, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 17, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 18, dtAbnormalMotion: 9, dtAnkylosis: 10 },
    { radialAbduction: 19, dtAbnormalMotion: 9, dtAnkylosis: 10 },
    { radialAbduction: 20, dtAbnormalMotion: 9, dtAnkylosis: 10 },
    { radialAbduction: 21, dtAbnormalMotion: 9, dtAnkylosis: 10 },
    { radialAbduction: 22, dtAbnormalMotion: 8, dtAnkylosis: 9 },
    { radialAbduction: 23, dtAbnormalMotion: 8, dtAnkylosis: 9 },
    { radialAbduction: 24, dtAbnormalMotion: 7, dtAnkylosis: 8 },
    { radialAbduction: 25, dtAbnormalMotion: 7, dtAnkylosis: 8 },
    { radialAbduction: 26, dtAbnormalMotion: 7, dtAnkylosis: 8 },
    { radialAbduction: 27, dtAbnormalMotion: 6, dtAnkylosis: 7 },
    { radialAbduction: 28, dtAbnormalMotion: 6, dtAnkylosis: 7 },
    { radialAbduction: 29, dtAbnormalMotion: 5, dtAnkylosis: 6 },
    { radialAbduction: 30, dtAbnormalMotion: 5, dtAnkylosis: 6 },
    { radialAbduction: 31, dtAbnormalMotion: 5, dtAnkylosis: 6 },
    { radialAbduction: 32, dtAbnormalMotion: 4, dtAnkylosis: 6 },
    { radialAbduction: 33, dtAbnormalMotion: 4, dtAnkylosis: 6 },
    { radialAbduction: 34, dtAbnormalMotion: 3, dtAnkylosis: 6 },
    { radialAbduction: 35, dtAbnormalMotion: 3, dtAnkylosis: 6 },
    { radialAbduction: 36, dtAbnormalMotion: 3, dtAnkylosis: 6 },
    { radialAbduction: 37, dtAbnormalMotion: 3, dtAnkylosis: 6 },
    { radialAbduction: 38, dtAbnormalMotion: 2, dtAnkylosis: 7 },
    { radialAbduction: 39, dtAbnormalMotion: 2, dtAnkylosis: 7 },
    { radialAbduction: 40, dtAbnormalMotion: 2, dtAnkylosis: 7 },
    { radialAbduction: 41, dtAbnormalMotion: 2, dtAnkylosis: 7 },
    { radialAbduction: 42, dtAbnormalMotion: 1, dtAnkylosis: 7 },
    { radialAbduction: 43, dtAbnormalMotion: 1, dtAnkylosis: 8 },
    { radialAbduction: 44, dtAbnormalMotion: 0, dtAnkylosis: 8 },
    { radialAbduction: 45, dtAbnormalMotion: 0, dtAnkylosis: 8 },
    { radialAbduction: 46, dtAbnormalMotion: 0, dtAnkylosis: 8 },
    { radialAbduction: 47, dtAbnormalMotion: 0, dtAnkylosis: 8 },
    { radialAbduction: 48, dtAbnormalMotion: 0, dtAnkylosis: 9 },
    { radialAbduction: 49, dtAbnormalMotion: 0, dtAnkylosis: 9 },
    { radialAbduction: 50, dtAbnormalMotion: 0, dtAnkylosis: 9 },
    { radialAbduction: '>50', dtAbnormalMotion: 0, dtAnkylosis: 9 }
];

// CMC Joint Adduction data
const ADDUCTIONData = [
    { cm: '>8', dtAbnormalMotion: 20, dtAnkylosis: 20 },
    { cm: 8, dtAbnormalMotion: 20, dtAnkylosis: 20 },
    { cm: 7.9, dtAbnormalMotion: 19, dtAnkylosis: 20 },
    { cm: 7.8, dtAbnormalMotion: 19, dtAnkylosis: 20 },
    { cm: 7.7, dtAbnormalMotion: 18, dtAnkylosis: 20 },
    { cm: 7.6, dtAbnormalMotion: 17, dtAnkylosis: 20 },
    { cm: 7.5, dtAbnormalMotion: 17, dtAnkylosis: 20 },
    { cm: 7.4, dtAbnormalMotion: 16, dtAnkylosis: 19 },
    { cm: 7.3, dtAbnormalMotion: 15, dtAnkylosis: 19 },
    { cm: 7.2, dtAbnormalMotion: 14, dtAnkylosis: 19 },
    { cm: 7.1, dtAbnormalMotion: 14, dtAnkylosis: 19 },
    { cm: 7, dtAbnormalMotion: 13, dtAnkylosis: 19 },
    { cm: 6.9, dtAbnormalMotion: 13, dtAnkylosis: 19 },
    { cm: 6.8, dtAbnormalMotion: 12, dtAnkylosis: 19 },
    { cm: 6.7, dtAbnormalMotion: 12, dtAnkylosis: 18 },
    { cm: 6.6, dtAbnormalMotion: 11, dtAnkylosis: 18 },
    { cm: 6.5, dtAbnormalMotion: 11, dtAnkylosis: 18 },
    { cm: 6.4, dtAbnormalMotion: 10, dtAnkylosis: 18 },
    { cm: 6.3, dtAbnormalMotion: 10, dtAnkylosis: 18 },
    { cm: 6.2, dtAbnormalMotion: 9, dtAnkylosis: 17 },
    { cm: 6.1, dtAbnormalMotion: 9, dtAnkylosis: 17 },
    { cm: 6, dtAbnormalMotion: 8, dtAnkylosis: 17 },
    { cm: 5.9, dtAbnormalMotion: 8, dtAnkylosis: 17 },
    { cm: 5.8, dtAbnormalMotion: 8, dtAnkylosis: 17 },
    { cm: 5.7, dtAbnormalMotion: 7, dtAnkylosis: 16 },
    { cm: 5.6, dtAbnormalMotion: 7, dtAnkylosis: 16 },
    { cm: 5.5, dtAbnormalMotion: 7, dtAnkylosis: 16 },
    { cm: 5.4, dtAbnormalMotion: 7, dtAnkylosis: 16 },
    { cm: 5.3, dtAbnormalMotion: 7, dtAnkylosis: 16 },
    { cm: 5.2, dtAbnormalMotion: 6, dtAnkylosis: 15 },
    { cm: 5.1, dtAbnormalMotion: 6, dtAnkylosis: 15 },
    { cm: 5, dtAbnormalMotion: 6, dtAnkylosis: 15 },
    { cm: 4.9, dtAbnormalMotion: 6, dtAnkylosis: 15 },
    { cm: 4.8, dtAbnormalMotion: 6, dtAnkylosis: 14 },
    { cm: 4.7, dtAbnormalMotion: 5, dtAnkylosis: 14 },
    { cm: 4.6, dtAbnormalMotion: 5, dtAnkylosis: 13 },
    { cm: 4.5, dtAbnormalMotion: 5, dtAnkylosis: 13 },
    { cm: 4.4, dtAbnormalMotion: 5, dtAnkylosis: 12 },
    { cm: 4.3, dtAbnormalMotion: 5, dtAnkylosis: 12 },
    { cm: 4.2, dtAbnormalMotion: 5, dtAnkylosis: 11 },
    { cm: 4.1, dtAbnormalMotion: 4, dtAnkylosis: 11 },
    { cm: 4, dtAbnormalMotion: 4, dtAnkylosis: 10 },
    { cm: 3.9, dtAbnormalMotion: 4, dtAnkylosis: 11 },
    { cm: 3.8, dtAbnormalMotion: 4, dtAnkylosis: 11 },
    { cm: 3.7, dtAbnormalMotion: 4, dtAnkylosis: 12 },
    { cm: 3.6, dtAbnormalMotion: 4, dtAnkylosis: 12 },
    { cm: 3.5, dtAbnormalMotion: 4, dtAnkylosis: 13 },
    { cm: 3.4, dtAbnormalMotion: 3, dtAnkylosis: 13 },
    { cm: 3.3, dtAbnormalMotion: 3, dtAnkylosis: 14 },
    { cm: 3.2, dtAbnormalMotion: 3, dtAnkylosis: 14 },
    { cm: 3.1, dtAbnormalMotion: 3, dtAnkylosis: 15 },
    { cm: 3, dtAbnormalMotion: 3, dtAnkylosis: 15 },
    { cm: 2.9, dtAbnormalMotion: 3, dtAnkylosis: 15 },
    { cm: 2.8, dtAbnormalMotion: 3, dtAnkylosis: 15 },
    { cm: 2.7, dtAbnormalMotion: 2, dtAnkylosis: 16 },
    { cm: 2.6, dtAbnormalMotion: 2, dtAnkylosis: 16 },
    { cm: 2.5, dtAbnormalMotion: 2, dtAnkylosis: 16 },
    { cm: 2.4, dtAbnormalMotion: 2, dtAnkylosis: 16 },
    { cm: 2.3, dtAbnormalMotion: 2, dtAnkylosis: 16 },
    { cm: 2.2, dtAbnormalMotion: 1, dtAnkylosis: 17 },
    { cm: 2.1, dtAbnormalMotion: 1, dtAnkylosis: 17 },
    { cm: 2, dtAbnormalMotion: 1, dtAnkylosis: 17 },
    { cm: 1.9, dtAbnormalMotion: 1, dtAnkylosis: 17 },
    { cm: 1.8, dtAbnormalMotion: 1, dtAnkylosis: 17 },
    { cm: 1.7, dtAbnormalMotion: 1, dtAnkylosis: 18 },
    { cm: 1.6, dtAbnormalMotion: 1, dtAnkylosis: 18 },
    { cm: 1.5, dtAbnormalMotion: 1, dtAnkylosis: 18 },
    { cm: 1.4, dtAbnormalMotion: 0, dtAnkylosis: 18 },
    { cm: 1.3, dtAbnormalMotion: 0, dtAnkylosis: 18 },
    { cm: 1.2, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 1.1, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 1, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 0.9, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 0.8, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 0.7, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 0.6, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 0.5, dtAbnormalMotion: 0, dtAnkylosis: 20 },
    { cm: 0.4, dtAbnormalMotion: 0, dtAnkylosis: 20 },
    { cm: 0.3, dtAbnormalMotion: 0, dtAnkylosis: 20 },
    { cm: 0.2, dtAbnormalMotion: 0, dtAnkylosis: 20 },
    { cm: 0.1, dtAbnormalMotion: 0, dtAnkylosis: 20 },
    { cm: 0, dtAbnormalMotion: 0, dtAnkylosis: 20 }
  ];

  // CMC Joint Opposition data
const OPPOSITIONData = [
    { cm: '>8', dtAbnormalMotion: 0, dtAnkylosis: 29 },
    { cm: 8, dtAbnormalMotion: 0, dtAnkylosis: 29 },
    { cm: 7.9, dtAbnormalMotion: 0, dtAnkylosis: 29 },
    { cm: 7.8, dtAbnormalMotion: 0, dtAnkylosis: 29 },
    { cm: 7.7, dtAbnormalMotion: 0, dtAnkylosis: 28 },
    { cm: 7.6, dtAbnormalMotion: 0, dtAnkylosis: 28 },
    { cm: 7.5, dtAbnormalMotion: 1, dtAnkylosis: 28 },
    { cm: 7.4, dtAbnormalMotion: 1, dtAnkylosis: 28 },
    { cm: 7.3, dtAbnormalMotion: 1, dtAnkylosis: 28 },
    { cm: 7.2, dtAbnormalMotion: 1, dtAnkylosis: 27 },
    { cm: 7.1, dtAbnormalMotion: 1, dtAnkylosis: 27 },
    { cm: 7, dtAbnormalMotion: 1, dtAnkylosis: 27 },
    { cm: 6.9, dtAbnormalMotion: 1, dtAnkylosis: 27 },
    { cm: 6.8, dtAbnormalMotion: 1, dtAnkylosis: 26 },
    { cm: 6.7, dtAbnormalMotion: 2, dtAnkylosis: 26 },
    { cm: 6.6, dtAbnormalMotion: 2, dtAnkylosis: 26 },
    { cm: 6.5, dtAbnormalMotion: 2, dtAnkylosis: 26 },
    { cm: 6.4, dtAbnormalMotion: 2, dtAnkylosis: 25 },
    { cm: 6.3, dtAbnormalMotion: 2, dtAnkylosis: 25 },
    { cm: 6.2, dtAbnormalMotion: 3, dtAnkylosis: 25 },
    { cm: 6.1, dtAbnormalMotion: 3, dtAnkylosis: 24 },
    { cm: 6, dtAbnormalMotion: 3, dtAnkylosis: 24 },
    { cm: 5.9, dtAbnormalMotion: 3, dtAnkylosis: 24 },
    { cm: 5.8, dtAbnormalMotion: 3, dtAnkylosis: 24 },
    { cm: 5.7, dtAbnormalMotion: 4, dtAnkylosis: 23 },
    { cm: 5.6, dtAbnormalMotion: 4, dtAnkylosis: 23 },
    { cm: 5.5, dtAbnormalMotion: 4, dtAnkylosis: 23 },
    { cm: 5.4, dtAbnormalMotion: 4, dtAnkylosis: 23 },
    { cm: 5.3, dtAbnormalMotion: 4, dtAnkylosis: 23 },
    { cm: 5.2, dtAbnormalMotion: 5, dtAnkylosis: 22 },
    { cm: 5.1, dtAbnormalMotion: 5, dtAnkylosis: 22 },
    { cm: 5, dtAbnormalMotion: 5, dtAnkylosis: 22 },
    { cm: 4.9, dtAbnormalMotion: 5, dtAnkylosis: 23 },
    { cm: 4.8, dtAbnormalMotion: 6, dtAnkylosis: 23 },
    { cm: 4.7, dtAbnormalMotion: 6, dtAnkylosis: 24 },
    { cm: 4.6, dtAbnormalMotion: 7, dtAnkylosis: 24 },
    { cm: 4.5, dtAbnormalMotion: 7, dtAnkylosis: 25 },
    { cm: 4.4, dtAbnormalMotion: 7, dtAnkylosis: 25 },
    { cm: 4.3, dtAbnormalMotion: 8, dtAnkylosis: 26 },
    { cm: 4.2, dtAbnormalMotion: 8, dtAnkylosis: 26 },
    { cm: 4.1, dtAbnormalMotion: 9, dtAnkylosis: 27 },
    { cm: 4, dtAbnormalMotion: 9, dtAnkylosis: 27 },
    { cm: 3.9, dtAbnormalMotion: 9, dtAnkylosis: 27 },
    { cm: 3.8, dtAbnormalMotion: 10, dtAnkylosis: 28 },
    { cm: 3.7, dtAbnormalMotion: 10, dtAnkylosis: 28 },
    { cm: 3.6, dtAbnormalMotion: 11, dtAnkylosis: 29 },
    { cm: 3.5, dtAbnormalMotion: 11, dtAnkylosis: 29 },
    { cm: 3.4, dtAbnormalMotion: 11, dtAnkylosis: 29 },
    { cm: 3.3, dtAbnormalMotion: 12, dtAnkylosis: 30 },
    { cm: 3.2, dtAbnormalMotion: 12, dtAnkylosis: 30 },
    { cm: 3.1, dtAbnormalMotion: 13, dtAnkylosis: 31 },
    { cm: 3, dtAbnormalMotion: 13, dtAnkylosis: 31 },
    { cm: 2.9, dtAbnormalMotion: 14, dtAnkylosis: 32 },
    { cm: 2.8, dtAbnormalMotion: 15, dtAnkylosis: 32 },
    { cm: 2.7, dtAbnormalMotion: 16, dtAnkylosis: 33 },
    { cm: 2.6, dtAbnormalMotion: 17, dtAnkylosis: 33 },
    { cm: 2.5, dtAbnormalMotion: 18, dtAnkylosis: 34 },
    { cm: 2.4, dtAbnormalMotion: 18, dtAnkylosis: 34 },
    { cm: 2.3, dtAbnormalMotion: 19, dtAnkylosis: 35 },
    { cm: 2.2, dtAbnormalMotion: 20, dtAnkylosis: 35 },
    { cm: 2.1, dtAbnormalMotion: 21, dtAnkylosis: 36 },
    { cm: 2, dtAbnormalMotion: 22, dtAnkylosis: 36 },
    { cm: 1.9, dtAbnormalMotion: 23, dtAnkylosis: 36 },
    { cm: 1.8, dtAbnormalMotion: 24, dtAnkylosis: 37 },
    { cm: 1.7, dtAbnormalMotion: 25, dtAnkylosis: 37 },
    { cm: 1.6, dtAbnormalMotion: 26, dtAnkylosis: 38 },
    { cm: 1.5, dtAbnormalMotion: 27, dtAnkylosis: 38 },
    { cm: 1.4, dtAbnormalMotion: 27, dtAnkylosis: 38 },
    { cm: 1.3, dtAbnormalMotion: 28, dtAnkylosis: 39 },
    { cm: 1.2, dtAbnormalMotion: 29, dtAnkylosis: 39 },
    { cm: 1.1, dtAbnormalMotion: 30, dtAnkylosis: 40 },
    { cm: 1, dtAbnormalMotion: 31, dtAnkylosis: 40 },
    { cm: 0.9, dtAbnormalMotion: 32, dtAnkylosis: 41 },
    { cm: 0.8, dtAbnormalMotion: 34, dtAnkylosis: 41 },
    { cm: 0.7, dtAbnormalMotion: 35, dtAnkylosis: 42 },
    { cm: 0.6, dtAbnormalMotion: 37, dtAnkylosis: 42 },
    { cm: 0.5, dtAbnormalMotion: 38, dtAnkylosis: 43 },
    { cm: 0.4, dtAbnormalMotion: 39, dtAnkylosis: 43 },
    { cm: 0.3, dtAbnormalMotion: 41, dtAnkylosis: 44 },
    { cm: 0.2, dtAbnormalMotion: 42, dtAnkylosis: 44 },
    { cm: 0.1, dtAbnormalMotion: 44, dtAnkylosis: 45 },
    { cm: 0, dtAbnormalMotion: 45, dtAnkylosis: 45 }
  ];

function findImpairment(value, data, type) {
    for (let i = 0; i < data.length; i++) {
        if (type === 'flexion' || type === 'extension' || type === 'ankylosis') {
            if (data[i][type] === value) {
                return data[i]['dt' + type.charAt(0).toUpperCase() + type.slice(1)];
            }
        } else if (type === 'cm') {
            if (data[i].cm === value) {
                return data[i].dtAbnormalMotion;
            }
        }
    }
    return 0;
}

function calculateImp() {
    let totalImp = 0;

    // IP Joint
    const ipFlexion = parseFloat(document.getElementById('ip-flexion').value) || 0;
    const ipExtension = parseFloat(document.getElementById('ip-extension').value) || 0;
    const ipAnkylosis = parseFloat(document.getElementById('ip-ankylosis').value) || 0;

    const ipFlexionImp = findImpairment(ipFlexion, IPData, 'flexion');
    const ipExtensionImp = findImpairment(ipExtension, IPData, 'extension');
    const ipAnkylosisImp = findImpairment(ipAnkylosis, IPData, 'ankylosis');

    console.log(`IP Flexion Impairment: ${ipFlexionImp}`);
    console.log(`IP Extension Impairment: ${ipExtensionImp}`);
    console.log(`IP Ankylosis Impairment: ${ipAnkylosisImp}`);

    const ipTotalImp = ipFlexionImp + ipExtensionImp + ipAnkylosisImp;
    totalImp += ipTotalImp;

    document.getElementById('ip-imp').innerText = ipTotalImp;

    // MP Joint
    const mpFlexion = parseFloat(document.getElementById('mp-flexion').value) || 0;
    const mpExtension = parseFloat(document.getElementById('mp-extension').value) || 0;
    const mpAnkylosis = parseFloat(document.getElementById('mp-ankylosis').value) || 0;

    const mpFlexionImp = findImpairment(mpFlexion, MPData, 'flexion');
    const mpExtensionImp = findImpairment(mpExtension, MPData, 'extension');
    const mpAnkylosisImp = findImpairment(mpAnkylosis, MPData, 'ankylosis');

    console.log(`MP Flexion Impairment: ${mpFlexionImp}`);
    console.log(`MP Extension Impairment: ${mpExtensionImp}`);
    console.log(`MP Ankylosis Impairment: ${mpAnkylosisImp}`);

    const mpTotalImp = mpFlexionImp + mpExtensionImp + mpAnkylosisImp;
    totalImp += mpTotalImp;

    document.getElementById('mp-imp').innerText = mpTotalImp;

    // CMC Radial Abduction
    const radialAbduction = parseFloat(document.getElementById('radial-abduction').value) || 0;
    const radialAbductionImp = findImpairment(radialAbduction, RADIALABDUCTIONData, 'cm');

    console.log(`CMC Radial Abduction Impairment: ${radialAbductionImp}`);

    totalImp += radialAbductionImp;

    document.getElementById('radial-abduction-imp').innerText = radialAbductionImp;

    // CMC Adduction
    const adduction = parseFloat(document.getElementById('cmc-adduction').value) || 0;
    const adductionImp = findImpairment(adduction, ADDUCTIONData, 'cm');

    console.log(`CMC Adduction Impairment: ${adductionImp}`);

    totalImp += adductionImp;

    document.getElementById('cmc-adduction-imp').innerText = adductionImp;

    // CMC Opposition
    const opposition = parseFloat(document.getElementById('opposition').value) || 0;
    const oppositionImp = findImpairment(opposition, OPPOSITIONData, 'cm');

    console.log(`CMC Opposition Impairment: ${oppositionImp}`);

    totalImp += oppositionImp;

    document.getElementById('opposition-imp').innerText = oppositionImp;

    document.getElementById('totalDigitImpairment').innerText = totalImp;
    console.log(`Total Digit Impairment: ${totalImp}`);
}

document.getElementById('calculate').addEventListener('click', calculateImp);
