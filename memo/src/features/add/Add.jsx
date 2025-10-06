import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useLocalStorage } from "react-use";
import { useState } from "react";
import toast from 'react-hot-toast';

export default function FormPropsTextFields() {
  const [_memoList, setMemoList] = useLocalStorage("memo-list", []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const notify = () => toast.success('Add success!');

  function addMemo(event) {
    event.preventDefault();
    setMemoList((_memoList) => [
      ..._memoList,
      {
        id: Date.now(),
        title,
        content,
      },
    ]);
    setTitle('');
    setContent('');
    notify();
  }
  return (
    <form style={{ textAlign: "center" }}>
      <TextField
        id="outlined-multiline-flexible"
        label="title"
        multiline
        maxRows={4}
        style={{ marginBottom: "10px" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="content"
        multiline
        rows={4}
        style={{ marginBottom: "10px" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <Button variant="contained" onClick={(e) => addMemo(e)}>Add</Button>
    </form>
  );
}
