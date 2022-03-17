import React from 'react'
import { APP_NAME } from '../config';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavLink, NavItem, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'; 
import Link from 'next/link';
import Router from 'next/router';
import {signout, isAuth} from '../actions/auth'






const Header = () => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(isOpen);
    // };

  return (
    <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <Link href="/">
        <NavbarBrand style={{cursor:'pointer'}}>
            <a>{APP_NAME}</a>
        </NavbarBrand>
    </Link>
    <NavbarToggler />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      {!isAuth() && (
      <Link href="/signin">
          <NavLink style={{cursor:'pointer'}}>
               Sign in
            </NavLink>
      </Link>
      )}
      {!isAuth() && (
      <Link href="/signup">
          <NavLink style={{cursor:'pointer'}}>
               Sign up
            </NavLink>
      </Link>
      )}
        {isAuth() && (
        <Link href="/signin">
            <NavLink style={{cursor:'pointer'}} onClick={() => signout(() => Router.push('/signin'))}>
                 Sign out
            </NavLink>
        </Link>
        )}

        {isAuth() && isAuth().role === 0 && (
          <Link href="/user">
            <NavLink style={{cursor:'pointer'}}>
                 {`${isAuth().name}'s Dashboard`}
            </NavLink>
          </Link>
        )}

        {isAuth() && isAuth().role === 1 && (
          <Link href="/admin">
            <NavLink style={{cursor:'pointer'}}>
                 {`${isAuth().name}'s Dashboard`}
            </NavLink>
          </Link>
        )}
      
    </Collapse>
  </Navbar>
</div>
  )
}

export default Header