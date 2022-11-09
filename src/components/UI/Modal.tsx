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
        background: "rgba(0, 0, 0, 0.7)",
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
      width="700px"
      height="500px"
      zIndex="modal"
      bgcolor="#efefef"
      color="#121212"
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
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
