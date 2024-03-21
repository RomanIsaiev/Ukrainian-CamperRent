import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AppLayout } from "../AppLayout/AppLayout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const Adverts = lazy(() => import("../../pages/AdvertsList/Adverts.jsx"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Adverts />} />
          <Route path="favorites" />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
