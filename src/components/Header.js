import { useState, useEffect } from "react";
import logo from "../imgs/Doraemon_character.png";
import {
  Navbar,
  FlexColumn,
  ProfileImg,
  NavLinks,
  NavItem,
  NavText,
  NavLink,
  DesktopNavLinks,
} from "./Header-Styles";

const Header = () => {

  const navLinks = {
    About: "#about",
    Skills: "#skills",
    Projects: "#projects",
    Contact: "#contact",
  };
  return (
    <Navbar>
      <FlexColumn>
        <a href="/#">
          <ProfileImg src={logo} alt="" />
        </a>
      </FlexColumn>
      <DesktopNavLinks>
          <FlexColumn>
            <NavText>Andrew</NavText>
            <NavText>Chin</NavText>
            <NavLinks>
              {Object.keys(navLinks).map((key, index) => {
                return (
                  <NavItem key={index}>
                    <NavLink href={`/${navLinks[key]}`}>{key}</NavLink>
                  </NavItem>
                );
              })}
            </NavLinks>
          </FlexColumn>
      </DesktopNavLinks>
    </Navbar>
  );
};

export default Header;