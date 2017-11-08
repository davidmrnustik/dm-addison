import { EVENT_VS } from './constants';

export function parseNameFromEvent(data, splitWord = EVENT_VS) {
  const names = data.split(splitWord);
  const first = names[0].trim();
  const second = names[1].trim();

  return { first, second };
}