import { devices } from "../../constants/devices";

export const styles = {
    section: `@media ${devices.mobile} {
        margin-left: 1em;
      }
      @media ${devices.tablet} {
        margin-left: 1em;
      }
      @media ${devices.laptop} {
        margin-left: 18.5em;
      }`,
}