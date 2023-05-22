import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./ChosenOptionLabel";
import { Box, Button, Divider } from "@mui/material";

const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "48px",
  borderBottom: "1px solid black",
  backgroundColor: "#36393f",
  width: "calc(100% - 350px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
});

const AppBar = () => {
  return (
    <MainContainer>
      <div className="flex gap-2 mr-4">
        <div className="mt-[0.15rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        </div>
        <div className="text-white text-[1.001rem]">Friends</div>
      </div>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button
          sx={{ my: 2, color: "white", display: "block", cursor: "pointer" }}
        >
          Online
        </Button>
        <Button
          sx={{ my: 2, color: "white", display: "block", cursor: "pointer" }}
        >
          All
        </Button>
        <Button
          sx={{ my: 2, color: "white", display: "block", cursor: "pointer" }}
        >
          Pending
        </Button>
        <Button
          sx={{ my: 2, color: "white", display: "block", cursor: "pointer" }}
        >
          Blocked
        </Button>
        <Button
          sx={{ my: 2, color: "white", display: "block", cursor: "pointer" }}
        >
          Add Friend
        </Button>
      </Box>
      <DropdownMenu />
    </MainContainer>
  );
};

export default AppBar;
