import React, { memo } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";

function DialogDelete({ open, handleClose, product, onDelete }) {
  const dispatch = useDispatch();

  const handleDelete = (data) => {
    dispatch(onDelete(data));
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Do you want to delete?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={(e) => handleDelete(product)}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default memo(DialogDelete);
