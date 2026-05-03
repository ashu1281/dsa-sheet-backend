import {
  useContext,
  useState,
} from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { loginUser } from "../services/auth.service";

import { setToken } from "../utils/storage";
import { AuthContext } from "../contexts/auth.context";

const LoginPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const {setUser} = useContext(AuthContext);
  const handleLogin =
    async () => {

      try {
        const response =
          await loginUser(
            email,
            password
          );

        setToken(
          response.data.token
        );

        setUser(response.data.user ?? null)
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <Box
      sx={{
        minHeight: "100vh",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        px: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 450,
        }}
      >
        <CardContent
          sx={{
            p: 4,
          }}
        >
          <Stack spacing={3}>

            <Typography
              sx={{
                fontVariant:'h6',
                fontWeight: 700,
                textAlign:'center'
              }}
            >
              Login
            </Typography>

            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <Button
              variant="contained"
              size="large"
              onClick={handleLogin}
            >
              Login
            </Button>

            <Typography
              sx={{textAlign:'center'}}
            >
              Don&apos;t have account?{" "}

              <Link to="/register">
                Register
              </Link>
            </Typography>

          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;