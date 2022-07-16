import "styled-components";
import { Color } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    backgroundColor: string;
    headerBackgroundColor: string;
    redColor: string;
  }
}
