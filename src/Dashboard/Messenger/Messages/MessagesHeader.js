import React from "react";
import { styled } from "@mui/system";
import Avatar from "../../../shared/components/Avatar";
import Typography from "@mui/material/Typography";

const MainContainer = styled("div")({
  width: "98%",
  display: "column",
  marginTop: "10px",
});

const MessagesHeader = ({ name = "", type }) => {
  return (
    <MainContainer>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}
      </Typography>
      {type === "friendList" ? (
        <div>
          <Typography
            sx={{
              width: "100%",
              color: "#b9bbbe",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            Start a conversation
          </Typography>
          <div className="flex ml-2 mb-2">
            <div className="flex gap-2">
              <div
                className="bg-green-600 rounded-full mt-2"
                style={{ width: "10px", height: "10px" }}
              ></div>
              <div>Online Friends</div>
            </div>
          </div>
          <hr />
        </div>
      ) : (
        <Typography
          sx={{
            color: "#b9bbbe",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          This is the beginning of your conversation with {name}
        </Typography>
      )}
    </MainContainer>
  );
};

export default MessagesHeader;
