import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{position:'fixed', top: 0, width: '96.3%', zIndex: 100}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
            A1booooo Memos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
