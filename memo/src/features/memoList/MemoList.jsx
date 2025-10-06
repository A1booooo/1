import List from "@mui/material/List";
import MemoListItem from "../../components/MemoListItem";
import { useLocalStorage } from "react-use";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AlignItemList({ searchText = "" }) {
  const [memoList, setMemoList] = useLocalStorage("memo-list", []);
  const [filterMemoList, setFilterMemoList] = useState(memoList);
  useEffect(() => {
    if (searchText === "") {
      setFilterMemoList(memoList);
      return;
    }
    setFilterMemoList(
      memoList.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, memoList]);

  const deleteMemo = (id) => {
    setMemoList(memoList.filter((item) => item.id !== id));
    toast.success("Delete success!");
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {filterMemoList.map((item) => {
        return (
          <MemoListItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            deleteMemo={deleteMemo}
          />
        );
      })}
    </List>
  );
}
