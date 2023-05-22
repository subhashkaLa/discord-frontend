import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import UserAvatar from "../../shared/components/user-avatar";

const UserProfile = () => {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="user_profile">
      <div className="user_detail">
        <UserAvatar isOnline={true} />
        <div className="user_info">
          <span className="text-lg ml-2 text-white">
            {userDetails?.username}
          </span>
          <span className="text-white text-xs ml-2 -mt-1">#6975</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
