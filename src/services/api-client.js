import axios from "axios";

export const baseUrl =
  import.meta.env.MODE === "development" ? "http://127.0.0.1:8000" : "";
// export const baseUrl = "";

export default axios.create({
  baseURL: `${baseUrl}`,
});
