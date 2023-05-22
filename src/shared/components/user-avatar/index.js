import React from "react";

const UserAvatar = ({ isOnline }) => {
  return (
    <div className={`avatar ${isOnline ? "online" : "offline"}`}>
      <img
        className="rounded-full"
        src="https://lh4.googleusercontent.com/-s0uM_RPgB80/AAAAAAAAAAI/AAAAAAAAAKY/mmJhLx4FnKg/photo.jpg?sz=50"
        alt=""
      />
    </div>
  );
};

export default UserAvatar;
