import styled from "styled-components";
import { devices } from "../../constants/devices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DesktopNavbar = styled.nav`
  position: fixed;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 2.5em;
  padding-right: 2.5em;
  margin-left: 2em;
  width: 10em;
  margin-top: 2.5em;
  background-color: #efefef;
  padding-bottom: 1.5em;
  border-radius: 1em;
  // box-shadow: 0 2px 4px black;

  @media ${devices.mobileMax} {
    display: none;
  }
  @media ${devices.tabletMax} {
    display: none;
  }
  @media ${devices.laptop} {
    display: flex;
  }
`;

const MobileNavbar = styled.nav`
  position: fixed;
  z-index: 100;
  display: flex;
  border-radius: 5% 5% 0 0;
  height: 5.3em;
  width: 100%;
  bottom: 0;
  right: 0;
  background-color: #efefef;
  box-shadow: 0 2px 4px black;
  @media ${devices.mobileMax} {
    display: flex;
  }
  @media ${devices.tabletMax} {
    display: flex;
  }
  @media ${devices.laptop} {
    display: none;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex: 1 1 0%;
  &:nth-child(1) {
    justify-content: flex-start;
  }
  align-items: flex-start;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  max-width: 80%;
  height: auto;
  margin-top: 1.7em;
  margin-bottom: 2em;
  border-radius: 50%;
  border-style: solid;
  border-color: black;
  box-shadow: 0 2px 2px black;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  @media ${devices.mobile} {
    width: 100%;
    align-items: center;
  }
  @media ${devices.tablet} {
    width: 100%;
    align-items: center;
  }
  @media ${devices.laptop} {
    align-items: flex-start;
    flex-direction: column;
  }
  padding-inline-start: 0.1em;
`;

const NavItem = styled.li`
  margin-bottom: 0.2em;
  @media ${devices.mobile} {
    flex: 1;
  }
  @media ${devices.tablet} {
    flex: 1;
    padding-left: 1em;
    padding-right: 1em;
  }
  @media ${devices.laptop} {
    padding-left: 0em;
  }
`;

const HeaderBox = styled.div`
  align-items: flex-start;
`;

const NavText = styled.h1`
  text-align: start;
  font-size: 2.25em;
  line-height: 0.25em;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  letter-spacing: 0.04em;
  font-size: 1.25em;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 black;
  color: black;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: inset 150px 0 0 0 black;
    color: white;
  }
`;

const MobileNavLink = styled.a`
  @media ${devices.mobile} {
    font-size: 1.3em;
    margin-left: 1em;
  }
  @media ${devices.tablet} {
    font-size: 1.5em;
    margin-left: 1.5em;
  }
  cursor: pointer;
  box-shadow: inset 0 0 0 0 black;
  color: black;
  padding: 0.1rem 0.25rem;
  // margin-right: 0.4em;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: inset 150px 0 0 0 black;
    color: white;
  }
`;

// const SubLink = styled.a`
//   text-decoration: none;
//   text-transform: uppercase;
//   font-family: "Lato", sans-serif;
//   letter-spacing: 0.04em;
//   font-size: 0.75em;
//   cursor: pointer;
//   box-shadow: inset 0 0 0 0 black;
//   color: black;
//   margin: 0 -.25rem;
//   padding: 0 .25rem;
//   transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
//   :hover {
//     box-shadow: inset 100px 0 0 0 black;
//     color: white;
//   }
// `;

const DesktopNavLinks = styled.div``;

export {
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
};
