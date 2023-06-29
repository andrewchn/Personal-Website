// import { useState, useEffect } from "react";
import prof from "../../imgs/profile.JPG";
import {
  DesktopNavbar,
  FlexColumn,
  ProfileImg,
  NavLinks,
  NavItem,
  NavText,
  HeaderBox,
  NavLink,
  DesktopNavLinks,
  MobileNavbar,
  MobileNavLink,
} from "./Header-Styles";
import resume from "../../assets/AndrewChinResumeForCoop.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faToolbox, faAddressBook, faCameraRetro, faFile, faHammer } from "@fortawesome/free-solid-svg-icons";
const Header = () => {

  const navLinks = [
    {
      name: "About",
      tag: "#about",
      icon: faAddressCard,
    },
    {
      name: "Skills",
      tag: "#skills",
      icon: faToolbox,
    },
    {
      name: "Projects",
      tag: "#projects",
      icon: faHammer,
    },
    {
      name: "Interests",
      tag: "#interests",
      icon: faCameraRetro,
    },
    {
      name: "Resume",
      tag: "#resume",
      icon: faFile,
    },
    {
      name: "Contact",
      tag: "#contact",
      icon: faAddressBook,
    },
  ];
  return (
    <>
      <DesktopNavbar>
        <>
          <ProfileImg src={prof} alt="" />
        </>
        <FlexColumn>
          <HeaderBox>
            <NavText>Andrew</NavText>
            <NavText>Chin</NavText>
          </HeaderBox>
          <NavLinks>
            {navLinks.map((item) => {
              if (item.name === "Resume") {
                return (
                  <NavItem key={item.name}>
                    <NavLink href={resume} target="_blank">
                      {item.name}
                    </NavLink>
                  </NavItem>
                );
              }
              return (
                <NavItem key={item.name}>
                  <NavLink href={`/${item.tag}`}>{item.name}</NavLink>
                </NavItem>
              );
            })}
          </NavLinks>
        </FlexColumn>
      </DesktopNavbar>
      <MobileNavbar>
        <NavLinks>
          {navLinks.map((item) => {
            if (item.name === "Resume") {
              return (
                <NavItem key={item.name}>
                  <a href={resume} target="_blank" rel="noreferrer">
                    <MobileNavLink icon={item.icon} color="black" size="2xl" />
                  </a>
                </NavItem>
              );
            }
            return (
              <NavItem key={item.name}>
                <a href={`/${item.tag}`}>
                  <MobileNavLink icon={item.icon} color="black" size="2xl" />
                </a>
              </NavItem>
            );
          })}
        </NavLinks>
      </MobileNavbar>
    </>
  );
};

export default Header;
