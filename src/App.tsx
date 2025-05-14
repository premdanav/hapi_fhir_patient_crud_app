import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { login, logout } from "./redux/slices/auth";
import {
  Box,
  Button,
  Container,
  Stack,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export const App = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    if (emailInput === "premdanav@gmail.com" && passwordInput === "prem") {
      dispatch(login());
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          {isLoggedIn ? (
            <Box textAlign="center">
              <Typography variant="h5" color="primary" gutterBottom>
                Welcome Back!
              </Typography>
              <Typography variant="body1" color="success.main">
                ✅ Logged In!
              </Typography>
              <Button
                variant="contained"
                color="error"
                sx={{ mt: 3 }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <>
              <Typography variant="h5" gutterBottom>
                Sign In
              </Typography>
              <Stack spacing={2} mt={2}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Stack>
            </>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
