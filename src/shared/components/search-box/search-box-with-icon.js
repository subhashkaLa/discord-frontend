import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function SearchBoxWithIcon() {
  return (
    <Paper
      component="form"
      className="bg-[#2f3031] border-[#212121]"
      sx={{
        height: "35px",
        p: "0px 4px",
        color: "white",
        backgroundColor: "#2f3031",
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white", height: "30px" }}
        placeholder="Search"
        className="bg-[#2f3031] border-[#212121] text-white"
        inputProps={{ "aria-label": "search" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="button"
        sx={{ color: "white", p: "14px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
