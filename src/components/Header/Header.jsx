import { HeaderNav } from "./HeaderNav/HeaderNav";
import { HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <HeaderNav />
      </nav>
    </HeaderContainer>
  );
};
