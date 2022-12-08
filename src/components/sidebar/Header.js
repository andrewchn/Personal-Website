// import { useState, useEffect } from "react";
import prof from "../../imgs/profile.JPG";
import {
  Navbar,
  FlexColumn,
  ProfileImg,
  NavLinks,
  NavItem,
  NavText,
  HeaderBox,
  NavLink,
  DesktopNavLinks,
} from "./Header-Styles";

const Header = () => {

  const navLinks = {
    About: "#about",
    Skills: "#skills",
    Projects: "#projects",
    Interests: "#interests",
    Resume: "#resume",
    Contact: "#contact",
  };
  return (
    <Navbar>
      <FlexColumn>
        <div>          
          <ProfileImg src={prof} alt="" />
        </div>
      </FlexColumn>
      <DesktopNavLinks>
          <FlexColumn>
            <HeaderBox>
              <NavText>Andrew</NavText>
              <NavText>Chin</NavText>
            </HeaderBox>
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