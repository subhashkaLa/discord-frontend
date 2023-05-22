import React from "react";
import { styled } from "@mui/system";
import FriendsTitle from "./FriendsTitle";
import FriendSearchBox from "./friend-search";
import AddFriendButton from "./AddFriendButton";
import FriendsList from "./FriendsList/FriendsList";
import UserProfile from "../../components/user-profile";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";
import FriendListButton from "../../shared/components/Friend-list-button";

const MainContainer = styled("div")({
  width: "280px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <div className="mt-2 w-full px-3">
        <FriendSearchBox />
      </div>
      <FriendListButton />
      <div className="mt-4 my-2 px-2">
        <div className="bg-[#202225] w-full h-[1px]"></div>
      </div>
      <div className="flex justify-between px-4 my-4">
        <div className="text-white text-sm">Direct Messages</div>
        <AddFriendButton />
      </div>
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
      {/* User Profile Logo */}
      <UserProfile />
    </MainContainer>
  );
};

export default FriendsSideBar;
