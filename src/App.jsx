// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import TodoEdit from "./pages/TodoEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/todo/:id" element={<TodoEdit />} />
        </Routes>
      </BrowserRouter>
      {/* <TodoPage></TodoPage> */}
    </>
  );
}

export default App;
