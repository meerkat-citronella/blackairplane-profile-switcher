import React from "react";
import styled from "styled-components";
import "gotham-fonts/css/gotham-rounded.css";

import { Tab, Owner, AddButton } from "./functions";
import { FONT_COLORS } from "./../constants";

const Container = styled.div`
  width: 360px;
  font-family: Gotham Rounded;
  font-style: normal;
  font-weight: normal;
  margin: 24px 16px;
`;

const CompanyName = styled.h6`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.15px;
  color: ${FONT_COLORS.highEmphasis};
  text-align: center;
  margin: 0;
  padding: 0;
`;

const CompanyCaption = styled.p`
  margin-top: 4px;
  margin-bottom: 18px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.2px;
  color: ${FONT_COLORS.mediumEmphasis};
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 9px;
`;

export const Switcher = () => {
  return (
    <Container>
      <CompanyName>Propworx Property Management</CompanyName>
      <CompanyCaption>
        1234 Main St., Suite 400, Houston, TX 77001 <br /> 82 Properties
      </CompanyCaption>
      <Flexbox>
        <Tab>My Profile</Tab>
        <Tab selected>Owners</Tab>
      </Flexbox>
      <Owner ownerName={"Jana Bridges"} propertiesOwned={3} selected></Owner>
      <Owner ownerName={"Michael Anderson"} propertiesOwned={23}></Owner>
      <Owner ownerName={"Sophia Ridenour"} propertiesOwned={41}></Owner>
      <AddButton />
    </Container>
  );
};
