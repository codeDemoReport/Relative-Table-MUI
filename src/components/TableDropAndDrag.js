import React, { useEffect, useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const colTable = [
  { id: "more", lable: "", maxWidth: "120px" },
  { id: "product_id", lable: "Product id", maxWidth: "100px" },
  { id: "product_name", lable: "Product Name", maxWidth: "150px" },
  { id: "producer", lable: "Producer", maxWidth: "150px" },
  { id: "description", lable: "Description", maxWidth: "200px" },
];

function TableDropAndDrag() {
  const { products } = useSelector((state) => state);
  const [data, setData] = useState([...products.food]);

  useEffect(() => {
    setData([...products.food]);
  }, [products.food]);

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(data);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setData(tempData);
  };
  console.log("data", data);
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        maxWidth: "80%",
        margin: "20px auto",
      }}
    >
      <Typography variant="h4">Demo Table Drop&Drag</Typography>
      <TableContainer>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Table>
            <TableHead>
              <TableRow>
                {colTable.map((element) => (
                  <TableCell
                    key={element.id}
                    width={element.maxWidth ? element.maxWidth : ""}
                  >
                    {element.lable}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <Droppable droppableId="droppable-1">
              {(provider) => (
                <TableBody
                  className="text-capitalize"
                  ref={provider.innerRef}
                  {...provider.droppableProps}
                >
                  {data.map((element, index) => (
                    <Draggable
                      key={element.product_name}
                      draggableId={element.product_name}
                      index={index}
                    >
                      {(provider) => (
                        <TableRow
                          {...provider.draggableProps}
                          ref={provider.innerRef}
                        >
                          <TableCell {...provider.dragHandleProps}>=</TableCell>
                          <TableCell>{element.id}</TableCell>
                          <TableCell>{element.product_name}</TableCell>
                          <TableCell>{element.producer}</TableCell>
                          <TableCell>{element.description}</TableCell>
                        </TableRow>
                      )}
                    </Draggable>
                  ))}
                  {provider.placeholder}
                </TableBody>
              )}
            </Droppable>
          </Table>
        </DragDropContext>
      </TableContainer>
    </Paper>
  );
}

export default TableDropAndDrag;
