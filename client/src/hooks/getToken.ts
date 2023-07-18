import { useCookies } from "react-cookie";

const getToken = () => {
  const token = useCookies(["token"])[0].token;
  console.log(token);
  return token;
};

export default getToken;
