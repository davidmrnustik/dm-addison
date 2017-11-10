import { EVENT_VS } from './constants';

export function parseNameFromEvent(data, splitWord = EVENT_VS) {
  const names = data.split(splitWord);
  const first = names[0].trim();
  const second = names[1].trim();

  return { first, second };
}

export function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest !== "undefined") {

    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    xhr = null;

  }
  return xhr;
}