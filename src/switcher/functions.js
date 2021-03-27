import React from "react";
import styled from "styled-components";
import { ownerPhotos } from "./../assets/png";
import { SvgIcon } from "./../icons/svg";
import { BRAND_COLORS, FONT_COLORS, DETAIL_COLORS } from "./../constants";
import {
  Body2MediumEmphasis,
  Subtitle1HighEmphasis,
  ButtonText,
} from "./../static/fonts";
import { FlexRow } from "../static/flexbox";

// tab
const TabCaption = styled(Body2MediumEmphasis)`
  text-align: center;
  margin-bottom: 12px;
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

const OwnerImg = styled.img`
  margin: 15px 16px;
  height: 40px;
`;

const OwnerOuterFlexbox = styled(FlexRow)`
  height: 69px; // leave 1px for the divider
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
`;

const OwnerInnerFlexbox = styled(FlexRow)`
  justify-content: flex-start;
  align-items: center;
`;

const DividerFlexbox = styled(FlexRow)`
  // to center the divider in the card
  justify-content: center;
`;

const Divider = styled.div`
  height: 1px;
  width: 91.2%;
  background: ${DETAIL_COLORS.surfaceOverlay};
`;

// button
const Button = styled.button`
  width: 328px;
  height: 36px;
  margin-top: 38px;
  background: ${BRAND_COLORS.secondary300};
  border: none;
  border-radius: 18px;
  color: ${FONT_COLORS.highEmphasisInverted};
`;

const ButtonOuterFlexbox = styled(FlexRow)`
  // to center the button
  justify-content: center;
`;

const ButtonInnerFlexbox = styled(FlexRow)`
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
            <Subtitle1HighEmphasis>{ownerName}</Subtitle1HighEmphasis>
            <Body2MediumEmphasis>
              Owner, {propertiesOwned} Properties
            </Body2MediumEmphasis>
          </div>
        </OwnerInnerFlexbox>
        <SvgIcon iconName={"Chevron Right"} />
      </OwnerOuterFlexbox>
      <DividerFlexbox>
        <Divider />
      </DividerFlexbox>
    </OwnerCard>
  );
};

export const AddButton = () => {
  return (
    <ButtonOuterFlexbox>
      <Button>
        <ButtonInnerFlexbox>
          <SvgIcon iconName={"Plus Sign"} />
          <ButtonText>Add</ButtonText>
        </ButtonInnerFlexbox>
      </Button>
    </ButtonOuterFlexbox>
  );
};
