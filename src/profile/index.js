import React from "react";
import styled from "styled-components";
import {
  OwnerNameAndPhoto,
  ContactInfo,
  PropertiesHeader,
  PropertiesCard,
} from "./functions";

const Container = styled.div`
  width: 496px;
  margin-top: 48px;
`;

export const Profile = () => {
  return (
    <Container>
      <OwnerNameAndPhoto ownerName="Jana Bridges" />
      <ContactInfo
        email={"jbridges@example.com"}
        phoneNumber={"(555) 555-5555"}
        addressLine1={"1234 Main St"}
        addressLine2={"Suite 400"}
        cityStateZip={"Houston, TX 770001"}
      />
      <PropertiesHeader />
      <PropertiesCard
        propertyName={"Tacoma Estates Home"}
        addressLine1={"4 N Forest Beach Dr"}
        cityStateZip={"Beaufort, SC 29928"}
        iconName={"Circle Check"}
      />
      <PropertiesCard
        propertyName={"Tacoma Estates Home"}
        addressLine1={"4 N Forest Beach Dr"}
        cityStateZip={"Beaufort, SC 29928"}
        iconName={"Circle Cancel"}
      />
      <PropertiesCard
        propertyName={"Tacoma Estates Home"}
        addressLine1={"4 N Forest Beach Dr"}
        cityStateZip={"Beaufort, SC 29928"}
        iconName={"Triangle Warning"}
      />
    </Container>
  );
};
