import styled from "styled-components";
import { FONT_COLORS, BRAND_COLORS } from "../constants";
import "gotham-fonts/css/gotham-rounded.css";

export const Headline4 = styled.div`
  font-family: Gotham Rounded;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.5px;
  color: ${FONT_COLORS.highEmphasis};
`;

export const Headline6 = styled.div`
  font-family: Gotham Rounded;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.15px;
  color: ${FONT_COLORS.highEmphasis};
`;

export const Body2MediumEmphasis = styled.div`
  font-family: Gotham Rounded Light;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: ${FONT_COLORS.mediumEmphasis};
`;

export const Body2HighEmphasis = styled.div`
  font-family: Gotham Rounded Light;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: ${FONT_COLORS.highEmphasis};
`;

export const Subtitle1HighEmphasis = styled.div`
  font-family: Gotham Rounded Light;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${FONT_COLORS.highEmphasis};
`;

export const Subtitle1MediumEmphasis = styled.div`
  font-family: Gotham Rounded Light;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${FONT_COLORS.mediumEmphasis};
`;

export const Subtitle1Primary500 = styled.div`
  font-family: Gotham Rounded Light;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${BRAND_COLORS.primary500};
`;

export const Subtitle2 = styled.div`
  font-family: Gotham Rounded;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  // omit color, because it has to be assigned a color through a prop during usage
`;

export const Caption = styled.div`
  font-family: Gotham Rounded Light;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.2px;
  color: ${FONT_COLORS.mediumEmphasis};
`;

export const ButtonText = styled.div`
  font-family: Gotham Rounded;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  // omit color
`;
