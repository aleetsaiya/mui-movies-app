import React from "react";
import { Modal } from "./UI/Modal";
import { useNavigate, useParams } from "react-router-dom";

export const MovieDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const handleClose = () => {
    navigate(-1);
  };

  return <Modal onClose={handleClose}>MovieDetail {params.id}</Modal>;
};
