import React, { useState } from "react";
import TableChild from "../components/TableChild";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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

const productList = {
  cars: [
    {
      product_id: 1,
      product_name: "toyota",
      producer: "Japan",
      description: "Red - 4 seats",
    },
    {
      product_id: 2,
      product_name: "toyota",
      producer: "Japan",
      description: "Red - 4 seats",
    },
    {
      product_id: 3,
      product_name: "toyota",
      producer: "Japan",
      description: "Red - 4 seats",
    },
    {
      product_id: 4,
      product_name: "toyota",
      producer: "Japan",
      description: "Red - 4 seats",
    },
    {
      product_id: 5,
      product_name: "toyota",
      producer: "Japan",
      description: "Red - 4 seats",
    },
  ],
  food: [
    {
      product_id: 1,
      product_name: "Pho",
      producer: "Viet Nam",
      description: "Delicious",
    },
    {
      product_id: 2,
      product_name: "Banh my",
      producer: "Viet Nam",
      description: "Cheap",
    },
    {
      product_id: 3,
      product_name: "toyota",
      producer: "Japan",
      description: "Red - 4 seats",
    },
    {
      product_id: 4,
      product_name: "toyota",
      producer: "Japan",
      description: "Red - 4 seats",
    },
    {
      product_id: 5,
      product_name: "toyota",
      producer: "Japan",
      description: "Red - 4 seats",
    },
  ],
};

function ListProduct(props) {
  const [showMore, setShowMore] = useState(false);

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
            <TableChild tableName={"Cars"} products={productList.cars} />
            <TableChild tableName={"Food"} products={productList.food} />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ListProduct;
