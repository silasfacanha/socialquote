import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { getUsers, registerUser } from "../services/userService";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import { useAuth } from "../context/AuthProvider";

const Auth = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { login, logout, cookies } = useAuth();

  const handleLoginSubmit = () => {
    login(loginUsername, loginPassword);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        height: "80vh",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>Register</Typography>
        <TextField
          size="small"
          value={registerUsername}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRegisterUsername(e.target.value)
          }
        />
        <TextField
          size="small"
          type="password"
          value={registerPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRegisterPassword(e.target.value)
          }
        />
        <Button
          onClick={() => registerUser(registerUsername, registerPassword)}
        >
          Register
        </Button>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>Login </Typography>
        <TextField
          size="small"
          value={loginUsername}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLoginUsername(e.target.value)
          }
        />
        <TextField
          size="small"
          type="password"
          value={loginPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLoginPassword(e.target.value)
          }
        />
        <Button onClick={handleLoginSubmit}>Login</Button>
      </Paper>
    </Container>
  );
};

export default Auth;
