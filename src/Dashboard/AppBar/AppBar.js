import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./ChosenOptionLabel";
import { Box, Button } from "@mui/material";

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
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button
          // key={page}
          // onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block", cursor: "pointer" }}
        >
          All Friends
        </Button>
        <Button
          // key={page}
          // onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block", cursor: "pointer" }}
        >
          Pending Invitations
        </Button>
      </Box>
      {/* <ChosenOptionLabel /> */}
      <DropdownMenu />
    </MainContainer>
  );
};

export default AppBar;
