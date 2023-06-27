import { Link } from "react-router-dom";

const Navbar = () => {
  return <div className="bg-blue-500 text-white p-4 flex flex-row justify-between">
    <Link to='/'>Blogly</Link>
    <nav className="space-x-2">
      <Link to='#' >Log In</Link>
      <Link to='#'>Profile</Link>
    </nav>
  </div>;
};

export default Navbar;
