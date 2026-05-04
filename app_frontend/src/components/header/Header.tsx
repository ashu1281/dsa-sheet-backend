import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  Close,
  DarkMode,
  LightMode,
  Logout,
  Search,
} from "@mui/icons-material";

import {
  ThemeContext,
} from "../../contexts/theme.context";

import {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

interface HeaderProps {
  search: string;

  setSearch: (
    value: string
  ) => void;

  userName: string;
}

const Header = ({
  search,
  setSearch,
  userName,
}: HeaderProps) => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(search);
  const {
    mode,
    toggleTheme,
  } = useContext(
    ThemeContext
  );

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    navigate("/login");
  };
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(inputValue);
    }, 500)
    return (() => clearTimeout(timer))
  }, [inputValue, setSearch])

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        borderBottom:
          "1px solid",

        borderColor: "divider",

        backdropFilter:
          "blur(10px)",
      }}
    >
      <Toolbar
        sx={{
          gap: 2,

          py: 1,
        }}
      >

        <Box
          sx={{
            minWidth: 150,
          }}
        >
          <Typography
            sx={{ fontVariant: "h6", fontWeight: 700 }}
          >
            {userName}
          </Typography>
        </Box>

        <Paper
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 0.5,
            borderRadius: 3,
          }}
        >
          <Search />

          <InputBase
            placeholder="Search questions or companies..."
            fullWidth
            value={inputValue}
            onChange={(e) =>
              setInputValue(e.target.value)
            }
            sx={{
              ml: 1,
            }}
          />

          {search && (
            <IconButton
              size="small"
              onClick={() => {
                setSearch("");
                setInputValue("");
              }}
            >
              <Close fontSize="small" />
            </IconButton>
          )}
        </Paper>

        <IconButton
          onClick={toggleTheme}
        >
          {mode === "dark" ? (
            <LightMode />
          ) : (
            <DarkMode />
          )}
        </IconButton>

        <Button
          variant="outlined"
          startIcon={<Logout />}
          onClick={handleLogout}
        >
          Logout
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default Header;