import axios from "axios";

export const getQuotes = async () => {
  const response = await axios.get("http://localhost:3000/quote");
  return response.data;
};
export const getOneQuote = async (id: string) => {
  const response = await axios.get(`http://localhost:3000/quote/${id}`);
  return response.data;
}

export const createQuote = async (quote: any) => {
  const response = await axios.post("http://localhost:3000/quote", quote);
  return response.data;
}

export const deleteQuote = async (id: string) => {
  const response = await axios.delete(`http://localhost:3000/quote/${id}`);
  return response.data;
}

export const updateQuote = async (id: string, quote: any) => {
  const response = await axios.put(`http://localhost:3000/quote/${id}`, quote);
  return response.data;
}
