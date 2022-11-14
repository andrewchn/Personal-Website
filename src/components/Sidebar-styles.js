import styled from "styled-components";

const SidebarSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: left;
  margin-top: 4.5em;
`;

const ProfileImg = styled.img`
    position: relative;
    border-radius: 50%;
    border-style: solid;
`;

const Header1WithSpacing = styled.h1`
    position: relative;
    text-align: right;
`;
export {SidebarSection, ProfileImg, Header1WithSpacing}