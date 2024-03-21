import { Welcome } from "../../components/Welcome/Welcome.jsx";

export default function HomePage() {
  // useEffect(() => {
  //   dispatch(fetchAdverts())
  //     .then((result) => {
  //       console.log("dannie tut", result.payload);
  //     })
  //     .catch((error) => {
  //       console.error("error", error);
  //     });
  // }, [dispatch]);

  return <Welcome />;
}
