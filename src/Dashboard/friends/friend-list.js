import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import MessagesHeader from "../Messenger/Messages/MessagesHeader";
import FriendsListItem from "../FriendsSideBar/FriendsList/FriendsListItem";
import SearchBoxWithIcon from "../../shared/components/search-box/search-box-with-icon";
import { Divider } from "@mui/material";

const MainContainer = styled("div")({
  width: "100%",
  padding: "5px 20px",
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
    f.isOnline = isUserOnline ? true : false;
  });

  return friends;
};

const FriendList = ({
  friends,
  count = 0,
  onlineUsers,
  typeOfList = "All Friends",
}) => {
  return (
    <MainContainer>
      <div className="w-full mt-3">
        <SearchBoxWithIcon />
      </div>
      <div className="text-white mt-5 mb-3 text-sm">
        {typeOfList}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{count}
      </div>
      <Divider />
      {checkOnlineUsers(friends, onlineUsers).map((f) => (
        <div>
          <div className="mb-3">
            <FriendsListItem
              username={f.username}
              id={f.id}
              key={f.id}
              isOnline={f.isOnline}
            />
          </div>
          <Divider />
        </div>
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(FriendList);
