import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "977f63e88b414edfb93970b0e05a764c",
  },
});
