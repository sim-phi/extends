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
export function normalizeSpeedEvents(events: SpeedEventPGS[]): void {
  if (events.length) {
    const maxEndTime = events.reduce((max, e) => Math.max(max, e.endTime), 0);
    if (maxEndTime < 1e9) {
      events.push({
        startTime: maxEndTime,
        endTime: 1e9,
        value: events[events.length - 1].value
      });
    }
  } else {
    events.push({ startTime: 0, endTime: 1e9, value: 1 });
  }
}
export function normalizeLineEvents(events: JudgeLineEventPGS[]): void {
  if (events.length) {
    const maxEndTime = events.reduce((max, e) => Math.max(max, e.endTime), 0);
    if (maxEndTime < 1e9) {
      events.push({
        startTime: maxEndTime,
        endTime: 1e9,
        start: events[events.length - 1].start,
        end: events[events.length - 1].end,
        start2: events[events.length - 1].start2,
        end2: events[events.length - 1].end2
      });
    }
  } else {
    events.push({ startTime: 0, endTime: 1e9, start: 0, end: 0, start2: 0, end2: 0 });
  }
}
