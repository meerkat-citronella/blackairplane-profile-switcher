import React from "react";
import styled from "styled-components";
import { AmplifyLogo } from "../../static/icons";
import { NavItem } from "./functions";
import "gotham-fonts/css/gotham-rounded.css";
import { FlexRow } from "../../static/flexbox";

// TO DO: make nav bar 100% width...

const NavBarContainer = styled(FlexRow)`
  height: 56px;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.1),
    0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const AmplifyLogoContainer = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;
`;

export const NavBar = () => {
  return (
    <div>
      <NavBarContainer>
        <AmplifyLogoContainer>
          <AmplifyLogo />
        </AmplifyLogoContainer>

        <NavItem caption={"Properties"} selected={400} />

        <NavItem caption={"My Company"} selected />

        <NavItem caption={"Vendors"} />

        <NavItem caption={"Shopping Lists"} />

        <NavItem caption={"Chat"} />
      </NavBarContainer>
    </div>
  );
};
