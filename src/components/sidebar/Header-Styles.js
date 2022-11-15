import styled from "styled-components";


const Navbar = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 1.9em;
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
    max-width: 90%;
    max-height: 90%;
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
  margin-bottom: ${(props) => (props.marginBottom ? "0.7rem" : "")};
  &:last-child {
    margin-right: 0;
  }
`;

const HeaderBox = styled.div`
  align-items: flex-start;
`;

const NavText = styled.h1`
  text-align: start;
  font-size: 2em;
  margin-left: 1em;
  line-height: .25em;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  letter-spacing: 0.04em;
  font-size: 0.93em;
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