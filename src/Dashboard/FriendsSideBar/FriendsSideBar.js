import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./FriendsList/FriendsList";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";
import UserProfile from "../../components/user-profile";
import FriendSearchBox from "./friend-search";

const MainContainer = styled("div")({
  width: "250px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <div className="mt-2 w-full px-1">
        {/* <AddFriendButton /> */}
        <FriendSearchBox />
      </div>
      <FriendsTitle title="Direct Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
      {/* User Profile Logo */}
      <UserProfile />
    </MainContainer>
  );
};

export default FriendsSideBar;
