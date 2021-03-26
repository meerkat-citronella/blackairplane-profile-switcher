import React from "react";
import styled from "styled-components";
import { OwnerNameAndPhoto, ContactInfo } from "./functions";

const Container = styled.div`
  width: 496px;
  margin-top: 48px;
`;

export const Profile = () => {
  return (
    <Container>
      <OwnerNameAndPhoto ownerName="Jana Bridges" />
      <ContactInfo />
    </Container>
  );
};
