import React from "react";
import styled from "styled-components";
import "gotham-fonts/css/gotham-rounded.css";

import { Tab, Owner, AddButton } from "./functions";
import { FONT_COLORS } from "../../static/constants";
import { Headline6, Caption } from "../../static/fonts";
import { FlexRow } from "../../static/flexbox";

const Container = styled.div`
  width: 360px;
  font-family: Gotham Rounded;
  font-style: normal;
  font-weight: normal;
  margin: 24px 16px;
`;

const CompanyName = styled(Headline6)`
  text-align: center;
  margin: 0;
  padding: 0;
`;

const CompanyCaption = styled(Caption)`
  margin-top: 4px;
  margin-bottom: 18px;
  text-align: center;
  color: ${FONT_COLORS.mediumEmphasis};
`;

const Flexbox = styled(FlexRow)`
  justify-content: center;
  margin-bottom: 9px;
`;

export const Switcher = ({ selectedOwner, setSelectedOwner }) => {
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
      <Owner
        ownerName={"Jana Bridges"}
        propertiesOwned={3}
        setSelectedOwner={setSelectedOwner}
        selectedOwner={selectedOwner}
      ></Owner>
      <Owner
        ownerName={"Michael Anderson"}
        propertiesOwned={23}
        setSelectedOwner={setSelectedOwner}
        selectedOwner={selectedOwner}
      ></Owner>
      <Owner
        ownerName={"Sophia Ridenour"}
        propertiesOwned={41}
        setSelectedOwner={setSelectedOwner}
        selectedOwner={selectedOwner}
      ></Owner>
      <AddButton />
    </Container>
  );
};
