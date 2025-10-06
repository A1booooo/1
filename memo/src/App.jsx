import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

import MemoList from "./features/memoList/MemoList";
import Add from "./features/add/Add";
import Search from "./features/search/Search";
import MemoItem from "./components/MemoItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MemoList />} />
          <Route path="add" element={<Add />} />
          <Route path="search" element={<Search />} />
          <Route path="memo/:id" element={<MemoItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
