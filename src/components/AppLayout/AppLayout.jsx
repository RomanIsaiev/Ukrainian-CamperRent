import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { GlobalStyle } from "../../GlobalStyles";

export const AppLayout = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
