import React from "react";
import styled from "styled-components";
import { ownerPhotos } from "./../assets/png";
import { SvgIcon } from "./../icons/svg";
import { BRAND_COLORS, FONT_COLORS, DETAIL_COLORS } from "./../constants";

// tab
const TabCaption = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.25px;
  color: ${(props) =>
    props.selected ? BRAND_COLORS.secondary300 : FONT_COLORS.mediumEmphasis};
`;

const TabContainer = styled.div`
  width: 164px;
  height: 48px;
`;

const SelectedTabElevation = styled.div`
  height: 2px;
  width: 164px;
  background: ${(props) =>
    props.selected ? BRAND_COLORS.secondary300 : DETAIL_COLORS.outline};
`;

// owner
const OwnerCard = styled.div`
  height: 70px;
  width: 100%;
  border-radius: 8px;
  background: ${(props) => (props.selected ? BRAND_COLORS.secondary50 : null)};
`;

const OwnerName = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: ${FONT_COLORS.highEmphasis};
`;

const OwnerProperties = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: ${FONT_COLORS.mediumEmphasis};
`;

const OwnerImg = styled.img`
  margin: 15px 16px;
`;

const OwnerOuterFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
`;

const OwnerInnerFlexbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// button
const Button = styled.button`
  width: 100%;
  height: 36px;
  margin-top: 38px;
  background: ${BRAND_COLORS.secondary300};
  border: none;
  border-radius: 18px;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.75px;
  text-transform: uppercase;
`;

const ButtonFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
`;

export const Tab = ({ children, selected }) => {
  return (
    <TabContainer>
      <TabCaption selected={selected}>{children}</TabCaption>
      <SelectedTabElevation selected={selected} />
    </TabContainer>
  );
};

export const Owner = ({ ownerName, propertiesOwned, selected }) => {
  return (
    <OwnerCard selected={selected}>
      <OwnerOuterFlexbox>
        <OwnerInnerFlexbox>
          <OwnerImg
            src={ownerPhotos[ownerName]}
            alt={`the owner, ${ownerName}`}
          />
          <div>
            <OwnerName>{ownerName}</OwnerName>
            <OwnerProperties>
              Owner, {propertiesOwned} Properties
            </OwnerProperties>
          </div>
        </OwnerInnerFlexbox>
        <SvgIcon iconName={"Chevron Right"} />
      </OwnerOuterFlexbox>
    </OwnerCard>
  );
};

export const AddButton = () => {
  return (
    <Button>
      <ButtonFlexbox>
        <SvgIcon iconName={"Plus Sign"} />
        Add
      </ButtonFlexbox>
    </Button>
  );
};
