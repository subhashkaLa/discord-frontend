import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ReactModal = ({
  title,
  description,
  show,
  handleClose,
  children,
  modalPosition = null,
}) => {
  const customStyle = {
    headerContainer: {
      lineHeight: "0.2rem",
    },
  };
  return (
    <Modal open={show} onClose={handleClose} center={modalPosition}>
      <div style={customStyle.headerContainer}>
        <h1 style={{ fontWeight: "400" }}>{title}</h1>
        <h6 style={{ fontWeight: "400", letterSpacing: "0.1rem" }}>
          {description}
        </h6>
        <hr />
      </div>
      {children}
    </Modal>
  );
};

export default ReactModal;
