// components/LogoutButton.tsx
import { Button } from "@mui/material";

interface LogoutButtonProps {
  onClick: () => void;
}

const LogoutButton = ({ onClick }: LogoutButtonProps) => {
  return (
    <Button variant="contained" color="error" onClick={onClick}>
      Logout
    </Button>
  );
};

export default LogoutButton;
