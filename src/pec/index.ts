import { parse as parse$ } from './pec2json';
import { parse as parseRPE$ } from './rpe2json';
import { readInfo as readInfo$ } from './readInfo';
namespace PEC {
  export const parse = parse$;
  export const parseRPE = parseRPE$;
  export const readInfo = readInfo$;
}
export default PEC;
