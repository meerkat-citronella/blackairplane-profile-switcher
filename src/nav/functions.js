import React from "react";
import { BRAND_COLORS } from "./../constants";
import { Subtitle2 } from "./../fonts";
import { SvgIcon } from "../icons/svg";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 40px;
`;

const NavOuterFlexbox = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavInnerFlexbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SelectedTabElevation = styled.div`
  background: ${BRAND_COLORS.primary500};
  height: 4px;
  width: 100%;
`;

const NavBarCaption = styled(Subtitle2)`
  margin-left: 6px;
  color: ${(props) =>
    props.selected ? BRAND_COLORS.primary500 : BRAND_COLORS.primary200};
`;

export const NavItem = ({ caption, selected }) => {
  return (
    <Container>
      <NavOuterFlexbox>
        <NavInnerFlexbox>
          <SvgIcon iconName={caption} selected={selected} />
          <NavBarCaption selected={selected}>{caption}</NavBarCaption>
        </NavInnerFlexbox>
        {selected && <SelectedTabElevation />}
      </NavOuterFlexbox>
    </Container>
  );
};
