import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableChild from "../components/TableChild";
import {
  getCars,
  getFood,
  editCar,
  editFood,
  deleteCar,
  deleteFood,
} from "../redux/action/productsAction";

import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TableContainer,
  TableCell,
} from "@mui/material";

const colTable = [
  { id: "more", lable: "", maxWidth: "90px" },
  { id: "product_id", lable: "Product id", maxWidth: "100px" },
  { id: "product_name", lable: "Product Name", maxWidth: "150px" },
  { id: "producer", lable: "Producer", maxWidth: "150px" },
  { id: "description", lable: "Description", maxWidth: "200px" },
  { id: "action", lable: "Action" },
];

function ListProduct(props) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCars());
    dispatch(getFood());
  }, []);

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        maxWidth: "80%",
        margin: "20px auto",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead>
            <TableRow>
              {colTable.map((element) => (
                <TableCell
                  width={element.maxWidth ? element.maxWidth : ""}
                  key={element.id}
                >
                  {element.lable}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableChild
              tableName={"Cars"}
              products={products.cars}
              update={editCar}
              onDelete={deleteCar}
            />
            <TableChild
              tableName={"Food"}
              products={products.food}
              update={editFood}
              onDelete={deleteFood}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ListProduct;
