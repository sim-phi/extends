import { parse as parse$ } from './pec2json';
import { parse as parseRPE$ } from './rpe2json';
import { readInfo as readInfo$ } from './readInfo';
import { normalizeLineEvents, normalizeSpeedEvents } from '../format';
namespace PEC {
  export function parse(pec: string, filename: string): ReturnType<typeof parse$> {
    const result = parse$(pec, filename);
    for (const line of result.data.judgeLineList) {
      normalizeSpeedEvents(line.speedEvents);
      normalizeLineEvents(line.judgeLineDisappearEvents);
      normalizeLineEvents(line.judgeLineMoveEvents);
      normalizeLineEvents(line.judgeLineRotateEvents);
    }
    return result;
  }
  export function parseRPE(pec: string, filename: string): ReturnType<typeof parseRPE$> {
    const result = parseRPE$(pec, filename);
    for (const line of result.data.judgeLineList) {
      normalizeSpeedEvents(line.speedEvents);
      normalizeLineEvents(line.judgeLineDisappearEvents);
      normalizeLineEvents(line.judgeLineMoveEvents);
      normalizeLineEvents(line.judgeLineRotateEvents);
    }
    return result;
  }
  export const readInfo = readInfo$;
}
export default PEC;
