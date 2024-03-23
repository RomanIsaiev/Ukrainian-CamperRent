import { Item, List, MainContainer, Title } from "./VehicleDetails.styled";

export const VehicleDetails = ({ item }) => {
  console.log(item);
  return (
    <MainContainer>
      <Title>Vehicle details</Title>
      <div>
        <List>
          <Item>
            <p>Form</p>
            <p>{item.form}</p>
          </Item>
          <Item>
            <p>Length</p>
            <p>{item.length}</p>
          </Item>
          <Item>
            <p>Width</p>
            <p>{item.width}</p>
          </Item>
          <Item>
            <p>Height</p>
            <p>{item.height}</p>
          </Item>
          <Item>
            <p>Tank</p>
            <p>{item.tank}</p>
          </Item>
          <Item>
            <p>Consumption</p>
            <p>{item.consumption}</p>
          </Item>
        </List>
      </div>
    </MainContainer>
  );
};
