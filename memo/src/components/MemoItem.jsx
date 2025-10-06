import { useLocalStorage } from "react-use";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";

export default function MemoItem() {
  const { id } = useParams();
  const [memoList,setMemoList] = useLocalStorage("memo-list", []); // 添加默认值[]
  const memo = memoList.find((memo) => String(memo.id) === id); // 注意类型转换
  const navigate = useNavigate();
  const [title, setTitle] = useState(memo.title);
  const [content, setContent] = useState(memo.content);

  const updatedMemoList = memoList.map((memo) => {
    if (String(memo.id) === id) {
      return {
        ...memo,
        title,
        content,
      };
    }
    return memo;
  });

  return (
    <>
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
        <Button
          variant="contained"
          onClick={() => {
            setMemoList(updatedMemoList);
            toast.success("Update success!");
            navigate('/')
          }}
        >
          Update
        </Button>
        <Fab
          color="primary"
          aria-label="add"
          style={{ position: "absolute", bottom: 16, right: 16 }}
          onClick={() => navigate("/")}
        >
          {<HomeIcon />}
        </Fab>
      </form>
    </>
  );
}
