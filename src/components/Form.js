import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../redux/actions/productActions";

const Form = ({ handleDialog, defaultValues, title }) => {
  const isProductPresent = useSelector((state) => state.edit);

  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (isProductPresent) {
      dispatch(updateProduct(formValues.id, formValues)); // Pass the updated formValues
      handleDialog();
      dispatch({ type: "EDIT_PRODUCT_STATE", payload: null });
      return;
    }

    dispatch(addProduct(formValues)); // Pass the formValues

    // Close the dialog
    handleDialog();
  };

  const handleClose = () => {
    dispatch({ type: "EDIT_PRODUCT_STATE", payload: null });
    handleDialog();
  };

  return (
    <div>
      <DialogTitle>PRODUCT</DialogTitle>
      <DialogContent>
        <DialogContentText>{title}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          value={formValues.title}
          onChange={handleInputChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="brand"
          label="Brand"
          type="text"
          fullWidth
          variant="standard"
          value={formValues.brand}
          onChange={handleInputChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="category"
          label="Category"
          type="text"
          fullWidth
          variant="standard"
          value={formValues.category}
          onChange={handleInputChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="price"
          label="Price"
          type="number"
          fullWidth
          variant="standard"
          value={formValues.price}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>
          {isProductPresent ? "EDIT" : "SAVE"}
        </Button>
      </DialogActions>
    </div>
  );
};

export default Form;
