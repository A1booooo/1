import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useSearchParams } from "react-router";

import MemoList from "../memoList/MemoList";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );
  const onChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
    setSearchParams({
      search: value,
    });
  };
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={onChange}
      />
      <MemoList searchText={searchText} />
    </>
  );
}
