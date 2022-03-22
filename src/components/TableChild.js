import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Table,
  TableRow,
  TableBody,
  Paper,
  TableContainer,
  TableCell,
  Button,
  IconButton,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import EditProduct from "./EditProduct";

function TableChild({ tableName, products }) {
  const [showMore, setShowMore] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  const [selectedProduct, setSelected] = useState({})

  const handleClose = () => {
    setShowEdit(false)
  }

  const handleEdit = (element) => {
    setSelected(element);
    setShowEdit(true)
  }

  return (
    <>
      {showEdit && <EditProduct open={showEdit} handleClose={handleClose} product={ selectedProduct}/>}
      <TableRow>
        <TableCell>
          {tableName}
          <IconButton onClick={() => setShowMore(!showMore)}>
            {showMore ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      {showMore &&
        products.map((element) => (
          <TableRow selected={true} key={element.product_id}>
            <TableCell>
              <CheckBox />
            </TableCell>
            <TableCell scope="product_id">{element.product_id}</TableCell>
            <TableCell scope="product_name">{element.product_name}</TableCell>
            <TableCell scope="producer">{element.producer}</TableCell>
            <TableCell scope="description">{element.description}</TableCell>
            <TableCell>
              <Button onClick={() => handleEdit(element)}>Update</Button>
              <Button>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
    </>
  );
}

export default TableChild;
