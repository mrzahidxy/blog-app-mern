import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Layout from "./layout/Layout";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/auth">
          <Route path="/auth/login" element={<Login />} />
        </Route>

        <Route index element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
