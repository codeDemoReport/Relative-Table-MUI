import React, { useState, memo } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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
  const [data, setData] = useState(products);

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

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(data);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setData(tempData);
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
