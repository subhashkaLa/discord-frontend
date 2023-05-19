import React from "react";
import { styled } from "@mui/system";
import FriendsTitle from "./FriendsTitle";
import FriendSearchBox from "./friend-search";
import AddFriendButton from "./AddFriendButton";
import FriendsList from "./FriendsList/FriendsList";
import UserProfile from "../../components/user-profile";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";

const MainContainer = styled("div")({
  width: "250px",
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
        {/* <AddFriendButton /> */}
        <FriendSearchBox />
      </div>
      <div className="px-4 mt-4 h-8 cursor-pointer flex items-center gap-3 ripple">
        {/* Logo */}
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
      <div className="mt-4 my-2 px-2">
        <div className="bg-[#202225] w-full h-[1px]"></div>
      </div>
      <div className="flex justify-between px-4 my-4">
        <div className="text-white text-sm">Direct Messages</div>
        <div className="text-white text-sm">+</div>
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
