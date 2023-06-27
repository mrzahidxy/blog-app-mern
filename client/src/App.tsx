import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import BlogList from "./components/BlogList";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blogs">
          <Route path=":id" element={<Blog />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
