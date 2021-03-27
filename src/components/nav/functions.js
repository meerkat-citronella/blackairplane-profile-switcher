import React from "react";
import { BRAND_COLORS } from "../../static/constants";
import { Subtitle2 } from "../../static/fonts";
import { SvgIcon } from "../../static/icons";
import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../static/flexbox";

const Container = styled.div`
  margin-left: 40px;
`;

const NavOuterFlexbox = styled(FlexColumn)`
  height: 40px;
  justify-content: space-between;
`;

const NavInnerFlexbox = styled(FlexRow)`
  justify-content: space-between;
`;

// to account for the two different shades of dark purple used in the figma
const SelectedTabElevation = styled.div`
  background: ${(props) =>
    props.selected
      ? props.selected === 400
        ? BRAND_COLORS.primary400
        : BRAND_COLORS.primary500
      : null};
  height: 4px;
  width: 100%;
`;

const NavBarCaption = styled(Subtitle2)`
  margin-left: 6px;
  color: ${(props) =>
    props.selected
      ? props.selected === 400
        ? BRAND_COLORS.primary400
        : BRAND_COLORS.primary500
      : BRAND_COLORS.primary200};
`;

export const NavItem = ({ caption, selected }) => {
  return (
    <Container>
      <NavOuterFlexbox>
        <NavInnerFlexbox>
          <SvgIcon iconName={caption} selected={selected} />
          <NavBarCaption selected={selected}>{caption}</NavBarCaption>
        </NavInnerFlexbox>
        {selected && <SelectedTabElevation selected={selected} />}
      </NavOuterFlexbox>
    </Container>
  );
};
