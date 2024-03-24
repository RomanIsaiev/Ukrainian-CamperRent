import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { GlobalStyle } from "../../GlobalStyles";
import { Helmet } from "react-helmet";

export const AppLayout = () => {
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
