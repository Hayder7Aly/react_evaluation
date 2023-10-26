import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productActions";

export default function ProductList({ products }) {
  const dispatch = useDispatch();

  const handleDialog = () => {
    dispatch({ type: "SET_DIALOG" });
  };

  const handleEditProduct = (product) => {
    dispatch({ type: "EDIT_PRODUCT_STATE", payload: product });
    handleDialog();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Product Type&nbsp;(g)</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row, idx) => (
            <TableRow
              key={idx}
              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar
                  alt="Travis Howard"
                  src={
                    row.thumbnail ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFxJ1jdySPZR7MP0MKUYFoVQLNlLOYvW2Tg&usqp=CAU"
                  }
                />
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.price} $</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(deleteProduct(row.id))}
                >
                  Delete
                </Button>
              </TableCell>

              <TableCell align="right">
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleEditProduct(row)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
