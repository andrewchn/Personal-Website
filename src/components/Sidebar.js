import pic from "../imgs/Doraemon_character.png";
import { Dropdown } from "./Dropdown.js";
import { SidebarSection, ProfileImg, Header1WithSpacing } from "./Sidebar-styles.js";

const Sidebar = () => {
  return (
    <SidebarSection>
      <ProfileImg src={pic} alt=""/>
      <Header1WithSpacing>Andrew Chin</Header1WithSpacing>
      <Dropdown items={["one", "two"]}></Dropdown>
    </SidebarSection>
  );
};

export default Sidebar;
