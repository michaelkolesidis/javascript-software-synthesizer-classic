/*
 * MIDI to Note String
 * Part of the JSS-01 | JavaScript Software Synthesizer project
 * Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 * GNU Affero General Public License v3.0
 *
 * The MIDI to Note String function takes MIDI note numbers and
 * returns the name of the note as a string. It covers the
 * entire range of an accoustic piano (88 keys). It can be
 * useful with Tone.js that needs note names in strings
 * as its input
 *
 */

export default function midiToNoteString(note: number) {
  const noteMap: { [key: number]: string } = {
    21: "A0",
    22: "Bb0",
    23: "B0",
    24: "C1",
    25: "Db1",
    26: "D1",
    27: "Eb1",
    28: "E1",
    29: "F1",
    30: "Gb1",
    31: "G1",
    32: "Ab1",
    33: "A1",
    34: "Bb1",
    35: "B1",
    36: "C2",
    37: "Db2",
    38: "D2",
    39: "Eb2",
    40: "E2",
    41: "F2",
    42: "Gb2",
    43: "G2",
    44: "Ab2",
    45: "A2",
    46: "Bb2",
    47: "B2",
    48: "C3",
    49: "Db3",
    50: "D3",
    51: "Eb3",
    52: "E3",
    53: "F3",
    54: "Gb3",
    55: "G3",
    56: "Ab3",
    57: "A3",
    58: "Bb3",
    59: "B3",
    60: "C4",
    61: "Db4",
    62: "D4",
    63: "Eb4",
    64: "E4",
    65: "F4",
    66: "Gb4",
    67: "G4",
    68: "Ab4",
    69: "A4",
    70: "Bb4",
    71: "B4",
    72: "C5",
    73: "Db5",
    74: "D5",
    75: "Eb5",
    76: "E5",
    77: "F5",
    78: "Gb5",
    79: "G5",
    80: "Ab5",
    81: "A5",
    82: "Bb5",
    83: "B5",
    84: "C6",
    85: "Db6",
    86: "D6",
    87: "Eb6",
    88: "E6",
    89: "F6",
    90: "Gb6",
    91: "G6",
    92: "Ab6",
    93: "A6",
    94: "Bb6",
    95: "B6",
    96: "C7",
    97: "Db7",
    98: "D7",
    99: "Eb7",
    100: "E7",
    101: "F7",
    102: "Gb7",
    103: "G7",
    104: "Ab7",
    105: "A7",
    106: "Bb7",
    107: "B7",
    108: "C8",
  };

  if (note in noteMap) {
    return noteMap[note];
  }
}
