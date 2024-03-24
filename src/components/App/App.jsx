import { Route, Routes, useOutletContext } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AppLayout } from "../AppLayout/AppLayout";
import { GlobalStyle } from "../../GlobalStyles.js";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const Adverts = lazy(() => import("../../pages/AdvertsList/Adverts.jsx"));
const Favorites = lazy(() => import("../../pages/FavoritesList/Favorites.jsx"));
const FeaturesBlock = lazy(() =>
  import("../../pages/Features/FeaturesBlock.jsx")
);
const ReviewsBlock = lazy(() => import("../../pages/Reviews/ReviewsBlock.jsx"));

function App() {
  return (
    <Suspense>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Adverts />}>
            <Route
              path="features"
              element={<FeaturesBlock item={useOutletContext()} />}
            />
            <Route
              path="reviews"
              element={<ReviewsBlock item={useOutletContext()} />}
            />
          </Route>
          <Route path="favorites" element={<Favorites />}>
            <Route
              path="features"
              element={<FeaturesBlock item={useOutletContext()} />}
            />
            <Route
              path="reviews"
              element={<ReviewsBlock item={useOutletContext()} />}
            />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
