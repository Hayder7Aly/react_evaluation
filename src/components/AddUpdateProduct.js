// import * as React from "react";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

export default function AddUpdateProduct() {
  const open = useSelector((state) => state.dialog);
  const editProductState = useSelector((state) => state.editProductState);
  const dispatch = useDispatch();

  const handleDialog = () => {
    dispatch({ type: "SET_DIALOG" });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleDialog}>
        ADD PRODUCT
      </Button>
      <Dialog open={open} onClose={handleDialog}>
        <Form
          defaultValues={
            editProductState
              ? editProductState
              : { title: "", category: "", price: 0, brand: "" }
          }
          open={open}
          handleDialog={handleDialog}
          title={editProductState ? "EDIT PRODUCT" : "ADD PRODUCT"}
        />
      </Dialog>
    </div>
  );
}
