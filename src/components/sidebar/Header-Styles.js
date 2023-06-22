import styled from "styled-components";
import {devices} from "../../constants/devices"

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

  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {
    display: none;
  }
  @media ${devices.laptop} {
    display: flex;
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
    width: 100%;
    margin-top: 1.7em;
    margin-bottom: 2em;
    border-radius: 50%;
    border-style: solid;
    border-color: black;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: flex-start;
  flex-direction: column;
  padding-inline-start: 0.1em;
`;

const NavItem = styled.li`
  margin-bottom: 0.2em;
  &:last-child {
    margin-right: 0;
  }
`;

const HeaderBox = styled.div`
  align-items: flex-start;
`;

const NavText = styled.h1`
  text-align: start;
  font-size: 2.25em;
  line-height: .25em;
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
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
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

const DesktopNavLinks = styled.div`

`;


export {
    DesktopNavbar as Navbar,
    FlexColumn,
    ProfileImg,
    NavLinks,
    NavItem,
    NavText,
    HeaderBox,
    NavLink,
    DesktopNavLinks,
};