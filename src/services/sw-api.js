const BASE_URL = `https://swapi.co/api/`

export function getAllStarships() { 
  const url = `${BASE_URL}starships/`;
  return fetch(url, {mode: 'cors'}).then(res => res.json());
}

export function getStarshipById(id) {
  const url = `${BASE_URL}starships/${id}/`;
  return fetch(url, {mode: 'cors'}).then(res => res.json());
}