// import original module declarations
import "styled-components";
import { IToken } from "./tokens";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends IToken {}
}
