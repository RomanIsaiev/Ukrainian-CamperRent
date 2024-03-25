import {
  Item,
  ItemText,
  ItemTitle,
  List,
  MainContainer,
  Title,
} from "./VehicleDetails.styled";

export const VehicleDetails = ({ item }) => {
  return (
    <MainContainer>
      <Title>Vehicle details</Title>
      <div>
        <List>
          <Item>
            <ItemTitle>Form</ItemTitle>
            <ItemText>{item.form}</ItemText>
          </Item>
          <Item>
            <ItemTitle>Length</ItemTitle>
            <ItemText>{item.length}</ItemText>
          </Item>
          <Item>
            <ItemTitle>Width</ItemTitle>
            <ItemText>{item.width}</ItemText>
          </Item>
          <Item>
            <ItemTitle>Height</ItemTitle>
            <ItemText>{item.height}</ItemText>
          </Item>
          <Item>
            <ItemTitle>Tank</ItemTitle>
            <ItemText>{item.tank}</ItemText>
          </Item>
          <Item>
            <ItemTitle>Consumption</ItemTitle>
            <ItemText>{item.consumption}</ItemText>
          </Item>
        </List>
      </div>
    </MainContainer>
  );
};
