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
    position: aboslute;
    border-radius: 50%;
    border-style: solid;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: flex-start;
  flex-direction: column;
`;

const NavItem = styled.li`
  margin-right: 2em;
  margin-bottom: ${(props) => (props.marginBottom ? "0.7rem" : "")};
  &:last-child {
    margin-right: 0;
  }
`;

const NavText = styled.h1`
  font-size: 2em;
  margin-left: 1em;
  line-height: 0em;
`

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  letter-spacing: 0.04em;
  font-size: 0.93em;
  cursor: pointer;
  :hover {
    background: linear-gradient(90deg, #996633 0%, #f1a48e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const DesktopNavLinks = styled.div`

`;

const MobileNavLinks = styled.ul`
  list-style: none;
  margin-top: 0.5rem;
  padding-inline-start: 1rem;
`;

const SmallNavLinkContainer = styled.div`
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

const SmallMenuContainer = styled.div`
  position: absolute;
  z-index: 2;
  transition: all 0.25s;
  background: purple;
  top: 1.2rem;
  right: 1.2rem;
  border-radius: 6%;
  display: flex;
  flex-direction: column;
`;

const SmallLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0 0.3rem 0;
  > * {
    margin: 0.9rem;
  }
`;

const CrossContainer = styled.div`
  position: relative;
  margin: 0.4rem auto auto 85%;
  &:hover {
    cursor: pointer;
  }
`;

const FlexEndColumn = styled(FlexColumn)`
  justify-content: flex-end;
`;

export {
    Navbar,
    FlexColumn,
    FlexEndColumn,
    ProfileImg,
    NavLinks,
    NavItem,
    NavText,
    NavLink,
    DesktopNavLinks,
    MobileNavLinks,
    SmallNavLinkContainer,
    SmallMenuContainer,
    SmallLinksContainer,
    CrossContainer,
};