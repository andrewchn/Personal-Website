import styled from "styled-components";
import { devices } from "../../constants/devices";
import { styles } from "../shared/Shared-Styles";

const TrainDiv = styled.div`
  @media ${devices.mobileMax} {
    display: flex;
  }
  @media ${devices.tablet} {
    display: none;
  }

  flex-direction: column;

  ${styles.section}

  margin-top: 1em;
  margin-right: 1em;
  margin-bottom: 5em;
  padding-top: 0.01em;
  padding-bottom: 3em;
  border-radius: 2em;
  background-color: #e7e8eb;
  box-shadow: 0 1px 1px black;
`;

const TrainTitle = styled.h1`
  margin-left: 0.65em;
  margin-right: 0.65em;
    
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  
  background-color: #00843d;
  font-size: 2.05em;
  border-radius: 0.5em;

  color: white;

  margin-top: 0.7em;
`;
const TrainList = styled.ul`
  list-style: none;
  margin-left: -0.9em;
`;

const TrainListItem = styled.li`
  font-weight: ${props => (props.first ? 'bold' : 'normal')};
  font-size: 1.5em;
  padding-bottom: 0.5em;
`;
export { TrainDiv, TrainTitle, TrainList, TrainListItem };
