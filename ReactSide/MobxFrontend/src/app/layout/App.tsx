import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import NavBar from "./Navbar";
import "./styles.css";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/activities/dashboard/home/HomePage";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar></NavBar>
          <Container style={{ marginTop: "7em" }}>
            <Outlet></Outlet>
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);
