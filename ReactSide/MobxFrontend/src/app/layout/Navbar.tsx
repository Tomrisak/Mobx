import { Button, Container, Menu } from "semantic-ui-react";
import image from "../../../public/assets/logo.png";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <img src={image} alt="logo" style={{ marginRight: "10px" }} />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Activities"></Menu.Item>
        <Menu.Item>
          <Button
            //onClick={() => activityStore.openForm()}
            positive
            content="Create Activity"
            as={NavLink}
            to="/createActivity"
          ></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
