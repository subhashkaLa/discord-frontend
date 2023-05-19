import React from "react";
import { useForm } from "react-hook-form";

import ReactModal from "../ReactModal";
import InputWithLabel from "../InputWithLabel";
import { create } from "../../../services/groups";

export default function CreateRoomModal({ showModal, handleClose }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await create(data);
      if (response.ok) {
        handleClose();
        console.log("Server created successfully");
      } else {
        console.log("Error occurred while creating server", response.problem);
      }
    } catch (error) {
      console.log("Error occurred while creating server", error.message);
    }
  };

  return (
    <ReactModal
      show={showModal}
      modalPosition="center"
      handleClose={handleClose}
      title="Create a Server"
      description="Your Server is where you and your friends hang out. Make yours and start talking."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithLabel
          error={errors?.name}
          register={register("name", {
            required: "Please enter server name",
          })}
          label="Server Name*"
          placeholder="Thinkgestalt Server"
        />
        <button type="submit" className="create-server-button">
          Create a Server
        </button>
      </form>
    </ReactModal>
  );
}
