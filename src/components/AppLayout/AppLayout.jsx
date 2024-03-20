import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div>
      <header></header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
