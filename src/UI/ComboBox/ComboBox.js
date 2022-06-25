import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import classes from "./ComboBox.module.css";
const ComboBox = React.forwardRef((props, ref) => {
  return (
    <Autocomplete
      ref={ref}
      disablePortal
      className={classes.comboBox}
      id="combo-box-demo"
      options={props.options}
      size="small"
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
});

export default ComboBox;
