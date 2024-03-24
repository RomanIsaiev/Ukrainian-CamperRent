import {
  MainContainer,
  MotivationText,
  StartContainer,
  StyledNavLink,
  SubTitle,
  Title,
  TitleContainer,
} from "./Welcome.styled";

export const Welcome = () => {
  return (
    <>
      <MainContainer>
        <TitleContainer>
          <Title>
            Camp<span>UA</span>
          </Title>
          <SubTitle>your reliable partner in traveling around Ukraine</SubTitle>
        </TitleContainer>
        <StartContainer>
          <div>
            <picture>
              <source
                srcSet={require("../../images/welcome-page-image-1x.jpg?size=862x618 1x, ../../images/welcome-page-image-2x.jpg?size=1724x1236 2x")}
                media="(min-width: 320px)"
              />
              <img
                src={require("../../images/welcome-page-image-1x.jpg")}
                alt="man-holding-map"
                width="862px"
                height="618px"
              />
            </picture>
          </div>
          <div>
            <MotivationText>
              Start your unforgettable journey with us today!
            </MotivationText>
            <StyledNavLink to="catalog">LETS GO</StyledNavLink>
          </div>
        </StartContainer>
      </MainContainer>
    </>
  );
};
