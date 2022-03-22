import React, { useState } from 'react';
import { Box, Modal, Typography, FormControl, TextField, Button} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: "50px"
};


function EditProduct({ open, handleClose, product }) {
    
    const [data, setData] = useState(product)

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
               
            >
                <Box sx={style}>
                    <Typography>Edit product</Typography>
                    <FormControl sx={{padding: "10px"}}>
                        <TextField label={"product_name"} sx={{margin: "10px"}} value={ data.product_name}/>
                        <TextField label={"producer"} sx={{margin: "10px"}}  value={ data.producer}/>
                        <TextField label={"description"} sx={{margin: "10px"}} value={data.description} />
                        <Button sx={{margin: "10px"}}>Update</Button>
                    </FormControl>
                </Box>
            </Modal>
        </>
    );
}

export default EditProduct;