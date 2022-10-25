import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Root extends Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Dashboard</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <div>
          <Outlet></Outlet>
        </div>
      </>
    );
  }
}
