import React, { useState, memo } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import {
  TableRow,
  TableCell,
  Button,
  IconButton,
  Checkbox,
} from "@mui/material";
import EditProduct from "./EditProduct";

import DialogDelete from "./DialogDelete";

function TableChild({ tableName, products, update, onDelete }) {
  const [showMore, setShowMore] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [ItemChecked, setItemChecked] = useState([]);
  const [selectedProduct, setSelected] = useState({});

  const selectedItem = (element) => {
    if (ItemChecked.includes(element.id)) {
      let newArr = ItemChecked.filter((data) => data !== element.id);
      setItemChecked([...newArr]);
    } else setItemChecked([...ItemChecked, element.id]);
  };

  const handleCloseEdit = () => {
    setShowModalEdit(false);
  };
  const handleCloseDelete = () => {
    setShowModalDelete(false);
  };

  const handleShowModalDelete = (element) => {
    setSelected(element);
    setShowModalDelete(true);
  };
  const handleShowModalEdit = (element) => {
    setSelected(element);
    setShowModalEdit(true);
  };

  return (
    <>
      {console.log("Tablechild re-render")}
      {showModalEdit && (
        <EditProduct
          onUpdate={update}
          open={showModalEdit}
          handleClose={handleCloseEdit}
          product={selectedProduct}
        />
      )}

      <DialogDelete
        open={showModalDelete}
        handleClose={handleCloseDelete}
        product={selectedProduct}
        onDelete={onDelete}
      />
      <TableRow>
        <TableCell>
          {tableName}
          <IconButton onClick={() => setShowMore(!showMore)}>
            {showMore ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </IconButton>
          <IconButton disabled={ItemChecked <= 0}>
            <DeleteOutlinedIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      {showMore &&
        products.map((element) => (
          <TableRow selected={true} key={element.id}>
            <TableCell>
              <Checkbox
                checked={ItemChecked.includes(element.id)}
                onClick={() => selectedItem(element)}
              />
            </TableCell>
            <TableCell>{element.id}</TableCell>
            <TableCell>{element.product_name}</TableCell>
            <TableCell>{element.producer}</TableCell>
            <TableCell>{element.description}</TableCell>
            <TableCell>
              <Button onClick={() => handleShowModalEdit(element)}>
                Update
              </Button>
              <Button onClick={() => handleShowModalDelete(element)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
    </>
  );
}

export default memo(TableChild);
