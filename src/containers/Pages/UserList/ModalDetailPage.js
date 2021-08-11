import { Fade, makeStyles, Modal } from "@material-ui/core";

import DetailListPage from "./DetailListpage";
import React from "react";

const UserDetailModal = (props) => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classe = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classe.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
    >
      <Fade in={props.open}>
        <DetailListPage id={props.currentId} handleClose={props.handleClose} />
      </Fade>
    </Modal>
  );
};

export default UserDetailModal;
