import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav, NavItem, NavLink, Container } from "reactstrap";

function NavbarComponent(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [isRefresh, setRefresh] = useState(true);

  return (
    <>
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink href="/" active>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/list-answer">Answer</NavLink>
          </NavItem>
        </Nav>
      </Container>
      <br />
      {/* <ListAnswer setRefresh={setRefresh} isRefresh={isRefresh} /> */}
      <Outlet></Outlet>
    </>
  );
}

export default NavbarComponent;
