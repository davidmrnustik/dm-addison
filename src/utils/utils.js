import { EVENT_VS } from '../constants';

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

export function fetchData(url) {
  const xhr = createCORSRequest('GET', url);
  
  return new Promise((resolve, reject) => {
    if (!xhr) {
      throw new Error('CORS not supported');
    }
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(new Error('Something went wrong with call.'));
    xhr.send();
  })
}