import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const navigate = useNavigate();

  return (
    <Box style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => navigate(".")}
        />
        <BottomNavigationAction
          label="Add"
          icon={<AddIcon />}
          onClick={() => navigate("add")}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          onClick={() => navigate("search")}
        />
      </BottomNavigation>
    </Box>
  );
}
