import pic from "../imgs/Doraemon_character.png";
import { SidebarContainer, SidebarItem, ProfileImg, Header1WithSpacing } from "./Sidebar-styles.js";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <ProfileImg src={pic} alt=""/>
      </SidebarItem>
      <SidebarItem>
        Andrew
      </SidebarItem>
      <SidebarItem>Chin</SidebarItem>
      <SidebarItem>Hello</SidebarItem>

      {/* <ProfileImg src={pic} alt=""/>
      <Header1WithSpacing>Andrew</Header1WithSpacing>
      <Header1WithSpacing>Chin</Header1WithSpacing>
      <a href="google.com">About</a>
      <a href="google.com">Projects</a>
      <a href="google.com">Interests</a>
      <a href="google.com">Resume</a>
      <a href="google.com">Contact</a> */}
      
    </SidebarContainer>
  );
};

export default Sidebar;
