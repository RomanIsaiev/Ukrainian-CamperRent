import sprite from "../../assets/sprite.svg";
import { Icon, List, Item, Box, ListContainer } from "./FeaturesList.styled";

export const FeaturesList = ({ item }) => {
  return (
    <ListContainer>
      <List>
        <Item>
          <Box>
            <Icon>
              <use href={`${sprite}#users`}></use>
            </Icon>
            {item.adults} adults
          </Box>
        </Item>
        <Item>
          <Box>
            <Icon>
              <use href={`${sprite}#trans`}></use>
            </Icon>
            <div>{item.transmission}</div>
          </Box>
        </Item>
        <Item>
          <Box>
            <Icon>
              <use href={`${sprite}#fuel`}></use>
            </Icon>
            {item.engine}
          </Box>
        </Item>
        {item.details.airConditioner > 0 ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#ac`}></use>
              </Icon>
              AC
            </Box>
          </Item>
        ) : null}
        {item.details.kitchen > 0 ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#kitchen`}></use>
              </Icon>
              Kitchen
            </Box>
          </Item>
        ) : null}
        {item.details.beds > 0 ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#beds`}></use>
              </Icon>
              {item.details.beds} beds
            </Box>
          </Item>
        ) : null}
        {item.details.CD > 0 ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#cd`}></use>
              </Icon>
              CD
            </Box>
          </Item>
        ) : null}
        {item.details.radio > 0 ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#radio`}></use>
              </Icon>
              radio
            </Box>
          </Item>
        ) : null}
        {item.details.hob > 0 ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#hob`}></use>
              </Icon>
              {item.details.hob} hob
            </Box>
          </Item>
        ) : null}
        {item.details.water !== "" ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#water`}></use>
              </Icon>
              {item.details.water} water
            </Box>
          </Item>
        ) : null}
        {item.details.toilet > 0 ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#toilet`}></use>
              </Icon>
              {item.details.toilet} toilet
            </Box>
          </Item>
        ) : null}
        {item.details.freezer > 0 ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#freezer`}></use>
              </Icon>
              {item.details.freezer} freezer
            </Box>
          </Item>
        ) : null}
        {item.details.microwave > 0 ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#microwave`}></use>
              </Icon>
              {item.details.microwave} microwave
            </Box>
          </Item>
        ) : null}
        {item.details.gas !== "" ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#gas`}></use>
              </Icon>
              {item.details.gas} gas
            </Box>
          </Item>
        ) : null}
        {item.details.airConditioner > 0 ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#conditioner`}></use>
              </Icon>
              {item.details.airConditioner} air conditioner
            </Box>
          </Item>
        ) : null}
        {item.details.shower > 0 ? (
          <Item>
            <Box>
              <Icon>
                <use href={`${sprite}#shower`}></use>
              </Icon>
              {item.details.shower} shower
            </Box>
          </Item>
        ) : null}
      </List>
    </ListContainer>
  );
};
