import {
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

import { registerUser } from "../services/auth.service";

const RegisterPage = () => {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister =
    async () => {

      try {
        await registerUser(
          name,
          email,
          password
        );

        navigate("/login");
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
              Register
            </Typography>

            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
            />

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
              onClick={
                handleRegister
              }
            >
              Register
            </Button>

            <Typography
            sx={{textAlign:'center'}}
            >
              Already have account?{" "}

              <Link to="/login">
                Login
              </Link>
            </Typography>

          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;