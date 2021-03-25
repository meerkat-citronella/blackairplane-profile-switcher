import React from "react";
import { PURPLE_DESELECTED, PURPLE_SELECTED } from "./../constants";
import { SvgIcon } from "./../icons/svg";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 40px;
`;

const Flexbox = styled.div`
  height: ${(props) => (props.height ? props.height : "auto")};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-between;
`;

const SelectedTabElevation = styled.div`
  background: #7566a0;
  height: 4px;
  width: 100%;
`;

const NavBarCaption = styled.span`
  font-family: Gotham Rounded;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-left: 6px;
  color: ${(props) => (props.selected ? PURPLE_SELECTED : PURPLE_DESELECTED)};
`;

export const NavItem = ({ caption, selected }) => {
  return (
    <Container>
      <Flexbox flexDirection={"column"} height={"40px"}>
        <Flexbox flexDirection={"row"}>
          <SvgIcon caption={caption} selected={selected} />
          <NavBarCaption selected={selected}>{caption}</NavBarCaption>
        </Flexbox>
        {selected && <SelectedTabElevation />}
      </Flexbox>
    </Container>
  );
};
