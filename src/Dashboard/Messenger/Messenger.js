import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./MessengerContent";
import FriendList from "../friends/friend-list";

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393f",
  marginTop: "48px",
  display: "flex",
});

const Messenger = ({ chosenChatDetails, pendingDetailsList }) => {
  return (
    <MainContainer>
      {chosenChatDetails?.type === "friend" ? (
        <MessengerContent chosenChatDetails={chosenChatDetails} />
      ) : chosenChatDetails?.type === "friendList" ? (
        <FriendList />
      ) : (
        <WelcomeMessage />
      )}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(Messenger);
