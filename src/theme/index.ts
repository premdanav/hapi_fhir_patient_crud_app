import { createTheme } from "@mui/material";

export const getTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: {
      mode,
      primary: { main: "#1976d2" },
      secondary: { main: "#9c27b0" },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  });
};
