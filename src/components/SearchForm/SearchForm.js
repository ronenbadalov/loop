import React, { useRef, useState } from "react";
import classes from "./SearchForm.module.css";
import FilterRadio from "../FilterRadio/FilterRadio";
import SearchButton from "../../UI/SearchButton/SearchButton";
import CountryFilter from "../Filters/CountryFilter";
import ComboBox from "../../UI/ComboBox/ComboBox";
import { TextField } from "@mui/material";

const categoryOptions = [
  { label: "Business", value: "business" },
  { label: "Entertainment", value: "entertainment" },
  { label: "General", value: "general" },
  { label: "Health", value: "health" },
  { label: "Science", value: "science" },
  { label: "Sports", value: "sports" },
  { label: "Technology", value: "technology" },
];

const SearchForm = (props) => {
  const [isFilterShown, setIsFilterShown] = useState(false);
  const countryValue = useRef("");
  const categoryValue = useRef("");
  const queryValue = useRef("");
  const submitFormHandler = (e) => {
    e.preventDefault();
    let country = countryValue.current;
    if (countryValue.current) {
      country = country.querySelector("input").value;
      country = country
        .slice(country.length - 3, country.length - 1)
        .toLowerCase();
    }
    const category = categoryValue.current
      ? categoryValue.current.querySelector("input").value
      : "";
    const query = queryValue.current
      ? queryValue.current.querySelector("input").value
      : "";
    !isFilterShown || query || category || country
      ? props.onGetNews(isFilterShown, country, category, query)
      : alert("you can't leave all the inputs empty!");
  };

  const filters = (
    <div className={classes.filters}>
      <CountryFilter ref={countryValue} />
      <ComboBox
        ref={categoryValue}
        label="Category"
        options={categoryOptions}
      />
      <TextField
        ref={queryValue}
        size="small"
        id="outlined-basic"
        label="Key words"
        variant="outlined"
      />
    </div>
  );

  return (
    <form onSubmit={submitFormHandler} className={classes.SearchForm}>
      <FilterRadio onSpecific={setIsFilterShown} />
      {isFilterShown && filters}
      <SearchButton type="submit" autofocus />
    </form>
  );
};

export default SearchForm;
