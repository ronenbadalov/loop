import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import classes from "./FilterRadio.module.scss";
export default function FilterRadio(props) {
  const handleRadioChange = (e) => {
    e.target.value === `I'm not picky`
      ? props.onSpecific(false)
      : props.onSpecific(true);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="I'm not picky"
        name="row-radio-buttons-group"
        onChange={handleRadioChange}
        className={classes["radio"]}
      >
        <FormControlLabel
          value="I'm not picky"
          control={<Radio />}
          label="I'm not picky"
        />
        <FormControlLabel
          value="Give me something specific"
          control={<Radio />}
          label="Give me something specific"
        />
      </RadioGroup>
    </FormControl>
  );
}
