import React from "react";
import { Modal, Box } from "@mui/material";
import { useModal } from "../provider/ModalProvider";

const GlobalModal = () => {
  const { isOpen, closeModal, modalContent } = useModal();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
        }}
      >
        {modalContent}
      </Box>
    </Modal>
  );
};

export default GlobalModal;
