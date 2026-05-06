import {
  useContext,
  useState,
} from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  Alert,
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

  const { setUser } =
    useContext(AuthContext);

  const [loading, setLoading] =
    useState(false);

  const [toastOpen, setToastOpen] =
    useState(false);

  const handleLogin =
    async () => {

      try {

        setToastOpen(true);
        setLoading(true);

        const response =
          await loginUser(
            email,
            password
          );

        setToken(
          response.data.token
        );

        setUser(
          response.data.user ?? null
        );

        navigate("/");

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };

  return (
    <>
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
                  fontSize: "24px",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Login
              </Typography>

              <TextField
                label="Email"
                fullWidth
                value={email}
                placeholder={"ashish@gmail.com"}
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
                placeholder={"Ashish@123"}
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
                disabled={loading}
              >
                {loading ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <CircularProgress
                      size={18}
                      color="inherit"
                    />

                    <span>
                      Logging in...
                    </span>
                  </Box>
                ) : (
                  "Login"
                )}
              </Button>

              <Typography
                sx={{
                  textAlign: "center",
                }}
              >
                Don&apos;t have account?{" "}

                <Link to="/register">
                  Register
                </Link>
              </Typography>

              <Typography
                sx={{
                  textAlign: "center",
                }}
              >
                Use placeholders as login credentials.
              </Typography>

            </Stack>
          </CardContent>
        </Card>
      </Box>

      <Snackbar
        open={toastOpen}
        autoHideDuration={120000}
        onClose={() =>
          setToastOpen(false)
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          severity="info"
          variant="filled"
          onClose={() =>
            setToastOpen(false)
          }
        >
          Please wait a few moments. First-time backend connection may take longer.
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginPage;