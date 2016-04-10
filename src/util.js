const HUMAN_IVAL_RE = /([\d.]+)\s?(ms|sec|min|hour|day|week|month|year)(?:ond|ute)?s?/;

/**
 * Convert human-readible time-interval
 * to milliseconds.
 *
 * Examples:
 *   - '1 ms'
 *   - '5 days'
 *   - '3 minutes'
 *   - '10 hours'
 *   - '30 seconds'
 *
 * Available abbreviations:
 *   - ms
 *   - sec -> second
 *   - min -> minute
 *
 * @param {String} humanTime
 * @return {Number} ms
 */

export function intervalToMs(humanTime) {
  let ms;

  if (typeof humanTime !== 'string') {
    return humanTime;
  }

  const match = humanTime.match(HUMAN_IVAL_RE);
  if (!match) {
    return humanTime;
  }

  switch (match[2]) {
  case 'ms':
    ms = 1;
    break;
  case 'sec':
    ms = 1000;
    break;
  case 'min':
    ms = 1000 * 60;
    break;
  case 'hour':
    ms = 1000 * 60 * 60;
    break;
  case 'day':
    ms = 1000 * 60 * 60 * 24;
    break;
  case 'week':
    ms = 1000 * 60 * 60 * 24 * 7;
    break;
  case 'month':
    ms = 1000 * 60 * 60 * 24 * 30;
    break;
  case 'year':
    ms = 1000 * 60 * 60 * 24 * 356;
    break;
  default:
    return humanTime;
  }

  return parseFloat(match[1], 10) * ms;
}
