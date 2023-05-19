import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as roomHandler from "../../realtimeCommunication/roomHandler"; // since the export in roomHandler is not default export so we have to use {} to access them but using '* and as' we can access then as they are objects
import ToolTips from "../../shared/components/ToolTips";
import CreateRoomModal from "../../shared/components/create-room-modal";

const CreateRoomButton = ({ isUserInRoom }) => {
  let [showServerModal, setShowServerModal] = useState(false);

  const handleCreateServer = () => {
    setShowServerModal(true);
  };

  return (
    <>
      <Button
        disabled={isUserInRoom}
        onClick={handleCreateServer}
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "16px",
          margin: 0,
          padding: 0,
          minWidth: 0,
          marginTop: "10px",
          color: "white",
          backgroundColor: "#5865F2",
        }}
      >
        <ToolTips position="right" content="Create a server">
          <AddIcon />
        </ToolTips>
      </Button>
      <CreateRoomModal
        showModal={showServerModal}
        handleClose={() => setShowServerModal(false)}
      />
    </>
  );
};

export default CreateRoomButton;
