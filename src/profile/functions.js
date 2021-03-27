import React from "react";
import styled from "styled-components";
import { BRAND_COLORS, DETAIL_COLORS } from "../constants";
import { SvgIcon } from "../icons/svg";
import { FlexColumn, FlexRow } from "../static/flexbox";
import { ownerPhotos } from "./../assets/png";
import home from "./../assets/png/home.png";
import {
  Headline4,
  Subtitle1MediumEmphasis,
  Subtitle1Primary500,
  ButtonText,
  Body2HighEmphasis,
  Caption,
} from "./../static/fonts";

// owner name and photo
const OwnerOuterFlexbox = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
  margin-bottom: 44px; // 58px (dist between edit svg and email) - 14px (margin-top of email)
`;

const OwnerInnerFlexbox = styled(FlexRow)`
  justify-content: center;
  column-gap: 14px;
`;

const OwnerButtonsFlexbox = styled(FlexRow)`
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
const ContactInfoFlexbox = styled(FlexRow)`
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

// properties
const PropertiesHeaderFlexbox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3px;
`;

const EditButton = styled(ButtonText)`
  color: ${BRAND_COLORS.primary500};
`;

const PropertiesCardOuterFlexbox = styled(FlexRow)`
  justify-content: flex-start;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.1),
    0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const PropertiesCardInnerFlexbox = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding-left: 16px;
  padding-right: 8px;
`;

const ImgWrapper = styled.div`
  max-height: 84px;
`;

const HomeImg = styled.img`
  width: 76px;
  height: 84px;
`;

const PositionWrapper = styled.div`
  position: relative;
  top: -79px;
  left: 8px;
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

export const ContactInfo = ({
  email,
  phoneNumber,
  addressLine1,
  addressLine2,
  cityStateZip,
}) => {
  return (
    <div>
      <ContactInfoFlexbox>
        <ContactInfoText>{email}</ContactInfoText>
        <SvgIcon iconName={"Email"} />
      </ContactInfoFlexbox>
      <Divider />
      <ContactInfoFlexbox>
        <ContactInfoText>{phoneNumber}</ContactInfoText>
        <SvgIcon iconName={"Telephone"} />
      </ContactInfoFlexbox>
      <Divider />
      <ContactInfoFlexbox>
        <ContactInfoText>
          {addressLine1}
          <br />
          {addressLine2}
          <br />
          {cityStateZip}
        </ContactInfoText>
        <SvgIcon iconName={"Location"} />
      </ContactInfoFlexbox>
    </div>
  );
};

export const PropertiesHeader = () => (
  <PropertiesHeaderFlexbox>
    <Subtitle1Primary500>Properties Assigned</Subtitle1Primary500>
    <EditButton>Edit</EditButton>
  </PropertiesHeaderFlexbox>
);

const PropertiesImg = ({ iconName }) => {
  return (
    <ImgWrapper>
      <HomeImg src={home} alt="a typical estates home" />
      <PositionWrapper>
        <SvgIcon iconName={iconName} />
      </PositionWrapper>
    </ImgWrapper>
  );
};

export const PropertiesCard = ({
  propertyName,
  addressLine1,
  cityStateZip,
  iconName,
}) => {
  return (
    <PropertiesCardOuterFlexbox>
      <PropertiesImg iconName={iconName} />
      <PropertiesCardInnerFlexbox>
        <div>
          <Body2HighEmphasis>{propertyName}</Body2HighEmphasis>
          <Caption>{addressLine1}</Caption>
          <Caption>{cityStateZip}</Caption>
        </div>
        <SvgIcon iconName={"Chevron Right"} />
      </PropertiesCardInnerFlexbox>
    </PropertiesCardOuterFlexbox>
  );
};
