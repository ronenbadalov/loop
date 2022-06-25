import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const CountryFilter = React.forwardRef((props, ref) => {
  return (
    <Autocomplete
      id="country-select-demo"
      options={countries}
      autoHighlight
      size="small"
      getOptionLabel={(option) => `${option.label} (${option.code})`}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          ref={ref}
          {...params}
          label="Country"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
});

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  {
    code: "US",
    label: "United States",
  },
  { code: "IL", label: "Israel" },
  {
    code: "AE",
    label: "United Arab Emirates",
  },
  { code: "AR", label: "Argentina" },
  { code: "AT", label: "Austria" },
  {
    code: "AU",
    label: "Australia",
  },
  { code: "BE", label: "Belgium" },
  { code: "BG", label: "Bulgaria" },
  { code: "BR", label: "Brazil" },
  {
    code: "CA",
    label: "Canada",
  },
  { code: "CH", label: "Switzerland" },
  { code: "CN", label: "China" },
  { code: "CO", label: "Colombia" },
  { code: "CU", label: "Cuba" },
  { code: "CZ", label: "Czech Republic" },
  {
    code: "DE",
    label: "Germany",
  },
  { code: "EG", label: "Egypt" },
  {
    code: "FR",
    label: "France",
  },
  { code: "GB", label: "United Kingdom" },
  { code: "GR", label: "Greece" },
  { code: "HK", label: "Hong Kong" },
  { code: "HU", label: "Hungary" },
  { code: "ID", label: "Indonesia" },
  { code: "IE", label: "Ireland" },
  { code: "IN", label: "India" },
  { code: "IT", label: "Italy" },
  {
    code: "JP",
    label: "Japan",
  },
  { code: "KR", label: "Korea, Republic of" },
  { code: "LT", label: "Lithuania" },
  { code: "LV", label: "Latvia" },
  { code: "MA", label: "Morocco" },
  { code: "MX", label: "Mexico" },
  { code: "MY", label: "Malaysia" },
  { code: "NG", label: "Nigeria" },
  { code: "NL", label: "Netherlands" },
  { code: "NO", label: "Norway" },
  { code: "NZ", label: "New Zealand" },
  { code: "PH", label: "Philippines" },
  { code: "PL", label: "Poland" },
  { code: "PT", label: "Portugal" },
  { code: "RO", label: "Romania" },
  { code: "RS", label: "Serbia" },
  { code: "RU", label: "Russian Federation" },
  { code: "SA", label: "Saudi Arabia" },
  { code: "SE", label: "Sweden" },
  { code: "SG", label: "Singapore" },
  { code: "SI", label: "Slovenia" },
  { code: "SK", label: "Slovakia" },
  { code: "TH", label: "Thailand" },
  { code: "TR", label: "Turkey" },
  {
    code: "TW",
    label: "Taiwan, Province of China",
  },
  { code: "UA", label: "Ukraine" },
  { code: "VE", label: "Venezuela" },
  { code: "ZA", label: "South Africa" },
];

export default CountryFilter;
