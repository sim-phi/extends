// type Chart = import('@/utils/Chart').Chart;
// type Note = import('@/utils/Chart').Note;
// type JudgeLine = import('@/utils/Chart').JudgeLine;
// type SpeedEvent = import('@/utils/Chart').SpeedEvent;
// type JudgeLineEvent = import('@/utils/Chart').JudgeLineEvent;
export interface ChartPGS {
  formatVersion?: number;
  offset: number;
  numOfNotes?: number;
  judgeLineList: JudgeLinePGS[];
}
export interface NotePGS {
  type: number;
  time: number;
  positionX: number;
  holdTime: number;
  speed: number;
  floorPosition: number;
}
export interface JudgeLinePGS {
  bpm: number;
  numOfNotes?: number;
  numOfNotesAbove?: number;
  numOfNotesBelow?: number;
  notesAbove?: NotePGS[];
  notesBelow?: NotePGS[];
  speedEvents: SpeedEventPGS[];
  judgeLineDisappearEvents: JudgeLineEventPGS[];
  judgeLineMoveEvents: JudgeLineEventPGS[];
  judgeLineRotateEvents: JudgeLineEventPGS[];
}
export interface SpeedEventPGS {
  startTime: number;
  endTime: number;
  value: number;
  floorPosition?: number;
  floorPosition2?: number; // float32
  floorPositionMin?: number;
}
export interface JudgeLineEventPGS {
  startTime: number;
  endTime: number;
  start: number;
  end: number;
  start2?: number;
  end2?: number;
}
// from sim-phi-vite
export interface BetterMessage {
  host: string;
  code: number;
  name: string;
  message: string;
  target: string;
}