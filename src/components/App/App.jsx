import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AppLayout } from "../AppLayout/AppLayout";

const HomePage = lazy(() => import("../../pages/HomePage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="favorites" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
