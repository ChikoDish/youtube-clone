import axios from "axios";
const KEY = "AIzaSyBLG7SCSGD0sfvbZ6rCFWVtjC6C1h75hO0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
