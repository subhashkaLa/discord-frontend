import { Button, ButtonGroup } from "@mui/material";
import React from "react";

const UserProfile = () => {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  return (
    // <></>
    <div className="user_profile">
      <div className="user_detail">
        <div className="user_logo">
          <img
            src="https://cdn.pixabay.com/photo/2016/02/13/05/02/adventurer-1197392_960_720.png"
            width="50"
            height="50"
          />
        </div>
        <div className="user_info">
          <span className="user_display">{userDetails?.username}</span>
          <span className="active_status">#6975</span>
        </div>
        {/* <div>
          <ButtonGroup size="small" aria-label="">
            <Button>O</Button>
            <Button>T</Button>
            <Button>T</Button>
          </ButtonGroup>
        </div> */}
      </div>
    </div>
  );
};

export default UserProfile;
