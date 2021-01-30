import Brand from "tokens/Brand";
import {
  BorderRadius,
  BorderWidth,
  FontSize,
  LineHeight,
  OpacityLevel,
  ShadowLevel,
  SpacingStack,
  SpacingInset,
  SpacingSquish,
  SpacingInline,
} from "tokens/global";

const token = {
  global: {
    BorderRadius,
    BorderWidth,
    FontSize,
    LineHeight,
    OpacityLevel,
    ShadowLevel,
    SpacingStack,
    SpacingInset,
    SpacingSquish,
    SpacingInline,
  },
  brand: Brand,
};

export type IToken = typeof token;
export default token;
