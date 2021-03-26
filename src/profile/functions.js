import React from "react";
import styled from "styled-components";
import { BRAND_COLORS, DETAIL_COLORS } from "../constants";
import { SvgIcon } from "../icons/svg";
import { ownerPhotos } from "./../assets/png";
import {
  Headline4,
  Subtitle1MediumEmphasis,
  ButtonText,
  Body2HighEmphasis,
} from "./../fonts";

// owner name and photo
const OwnerOuterFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 44px; // 58px (dist between edit svg and email) - 14px (margin-top of email)
`;

const OwnerInnerFlexbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 14px;
`;

const OwnerButtonsFlexbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
`;

const OwnerName = styled(Headline4)`
  margin-bottom: 8px;
`;

const OwnerTitle = styled(Subtitle1MediumEmphasis)`
  margin-bottom: 11px;
`;

const OwnerPhoto = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 24px;
`;

const ButtonTextPrimary400 = styled(ButtonText)`
  color: ${BRAND_COLORS.primary400};
`;

// contact info
const ContactInfoFlexbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfoText = styled(Body2HighEmphasis)`
  margin-top: 14px;
  margin-bottom: 13px;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${DETAIL_COLORS.surfaceOverlay};
`;

export const OwnerNameAndPhoto = ({ ownerName }) => {
  return (
    <OwnerOuterFlexbox>
      <OwnerPhoto
        src={ownerPhotos[ownerName]}
        alt={`owner name, ${ownerName}`}
      />
      <OwnerName>{ownerName}</OwnerName>
      <OwnerTitle>Owner</OwnerTitle>
      <OwnerInnerFlexbox>
        <OwnerButtonsFlexbox>
          <ButtonTextPrimary400>Edit</ButtonTextPrimary400>
          <SvgIcon iconName={"Edit"} selected={400} />
        </OwnerButtonsFlexbox>
        <OwnerButtonsFlexbox>
          <ButtonTextPrimary400>Chat</ButtonTextPrimary400>
          <SvgIcon iconName={"Chat"} selected={400} />
        </OwnerButtonsFlexbox>
      </OwnerInnerFlexbox>
    </OwnerOuterFlexbox>
  );
};

export const ContactInfo = () => {
  return (
    <div>
      <ContactInfoFlexbox>
        <ContactInfoText>j.bridges@example.com</ContactInfoText>
        <SvgIcon iconName={"Email"} />
      </ContactInfoFlexbox>
      <Divider />
      <ContactInfoFlexbox>
        <ContactInfoText>(555) 555-5555</ContactInfoText>
        <SvgIcon iconName={"Telephone"} />
      </ContactInfoFlexbox>
      <Divider />
      <ContactInfoFlexbox>
        <ContactInfoText>
          1234 Main St.
          <br />
          Suite 400
          <br />
          Houston, TX 77001
        </ContactInfoText>
        <SvgIcon iconName={"Location"} />
      </ContactInfoFlexbox>
    </div>
  );
};
