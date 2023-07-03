import axios from "axios";

export const getQuotes = async () => {
  const response = await axios.get("http://localhost:3000/quote");
  return response.data;
};
