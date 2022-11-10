import React from "react";
import { createPortal } from "react-dom";
import { Box } from "@mui/material";

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.1)",
      }}
      zIndex="modal"
      onClick={onClose}
    ></Box>
  );
};

const ModalOverlay = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Box
      width="850px"
      height="100vh"
      zIndex="modal"
      bgcolor="#242424"
      color="white"
      sx={{
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "8px",
      }}
    >
      {children}
    </Box>
  );
};

const portalElement = document.getElementById("overlay") as HTMLElement;

export const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
