import axios from 'axios';

const API_KEY = 'c07c1b72ab12ab07a08c159e2794df8a';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// this is an action creator; an action creator always returns an action
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // the action creator always returns an action;
  // an action must always have a type
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
