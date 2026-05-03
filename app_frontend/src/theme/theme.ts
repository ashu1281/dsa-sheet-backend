import {
  createTheme,
} from "@mui/material/styles";

export const getTheme = (
  mode: "light" | "dark"
) =>
  createTheme({
    palette: {
      mode,

      ...(mode === "dark"
        ? {
            background: {
              default: "#0f1117",
              paper: "#1a1d24",
            },
          }
        : {
            background: {
              default: "#f5f7fb",
              paper: "#ffffff",
            },
          }),
    },

    typography: {
      fontFamily:
        "'Source Sans 3', sans-serif",
    },

    shape: {
      borderRadius: 12,
    },

    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },

      MuiAccordion: {
        styleOverrides: {
          root: {
            borderRadius: "12px !important",
            overflow: "hidden",
            marginBottom: 16,
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor:
              mode === "dark"
                ? "#2a2d35"
                : "#e5e7eb",
          },
        },
      },
    },
  });