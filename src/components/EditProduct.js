import React, { useState, memo } from "react";
import {
  Box,
  Modal,
  Typography,
  FormControl,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  padding: "20px",
};

function EditProduct({ open, handleClose, product, onUpdate }) {
  const [data, setData] = useState({ ...product });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleUpdate = (e) => {
    dispatch(onUpdate(data));
    handleClose();
  };

  return (
    <>
      {console.log("Edit table re-render")}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Edit product
          </Typography>
          <FormControl sx={{ padding: "10px", marginLeft: "60px" }}>
            <TextField
              name="product_name"
              onChange={handleChange}
              label={"product_name"}
              sx={{ margin: "10px" }}
              value={data.product_name}
            />
            <TextField
              name="producer"
              onChange={handleChange}
              label={"producer"}
              sx={{ margin: "10px" }}
              value={data.producer}
            />
            <TextField
              name="description"
              onChange={handleChange}
              label={"description"}
              sx={{ margin: "10px" }}
              value={data.description}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  sx={{ margin: "10px" }}
                  variant="contained"
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  sx={{ margin: "10px" }}
                  variant="outlined"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}

export default memo(EditProduct);
