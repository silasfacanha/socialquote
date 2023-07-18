import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const LogoutButton = () => {
  const navigate = useNavigate();
  const [tokenCookie, setTokenCookie, removeTokenCookie] = useCookies([
    "token",
  ]);
  const [userIDCookie, setUserIDCookie, removeUserIDCookie] = useCookies([
    "userID",
  ]);

  const handleLogout = () => {
    removeTokenCookie("token");
    removeUserIDCookie("userID");
    navigate("/auth");
  };

  return (
    <Button color="inherit" onClick={handleLogout}>
      <Typography>Logout</Typography>
    </Button>
  );
};

export default LogoutButton;
