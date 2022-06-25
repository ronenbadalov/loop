import * as React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles({
  root: {
    background: "var(--main-color-blue)",
    color: "white",
    margin: "15px auto",
  },
});

export default function SearchButton(props) {
  const classes = useStyles();
  return (
    <Button
      type="submit"
      className={classes.root}
      variant="contained"
      endIcon={<SearchIcon />}
      onClick={props.onClick}
    >
      Search
    </Button>
  );
}
