import axios from 'axios'
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE,OPTIONS",
};

export async function getComic() {
    const response = await axios.get('https://xkcd.com/614/info.0.json', {headers})
  return response;
}
