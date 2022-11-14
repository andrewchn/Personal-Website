import styled from "styled-components";

const SidebarContainer = styled.ul`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SidebarItem = styled.li`
  background: tomato;
  padding: 5px;
  width: 200px;
  height: 150px;
  margin-top: 10px;
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
  position: relative;
`;

const ProfileImg = styled.img`
    max-width: 90%;
    max-height: 90%;
    position: aboslute;
    border-radius: 50%;
    border-style: solid;
`;

const Header1WithSpacing = styled.h1`
    position: relative;
    text-align: right;
    padding-right: 5rem;
`;
export {SidebarContainer, SidebarItem, ProfileImg, Header1WithSpacing}