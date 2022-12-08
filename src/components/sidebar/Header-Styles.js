import styled from "styled-components";


const Navbar = styled.nav`
  position: fixed;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 1em;
  padding-left: 2.5em;
  padding-right: 2.5em;
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
    max-width: 60%;
    max-height: 60%;
    margin-top: 4em;
    margin-left: .75em;
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
`;

const NavItem = styled.li`
  margin-bottom: 0.2em;
  &:last-child {
    margin-right: 0;
  }
`;

const HeaderBox = styled.div`
  align-items: flex-start;
  margin-left: 2.2em;
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
    box-shadow: inset 100px 0 0 0 black;
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
    Navbar,
    FlexColumn,
    ProfileImg,
    NavLinks,
    NavItem,
    NavText,
    HeaderBox,
    NavLink,
    DesktopNavLinks,
};