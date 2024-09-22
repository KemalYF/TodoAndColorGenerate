// yang dikometari opsi kedua untuk membuat routing
// import { Link } from "react-router-dom";

import { NavLink, Outlet } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <>
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-li">
            {/* <Link to={"/"}>Todo</Link> */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-li">
            {/* <Link to={"/color-generator"}>Color Generator</Link> */}
            <NavLink to="/color-generator">Color Generator</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
