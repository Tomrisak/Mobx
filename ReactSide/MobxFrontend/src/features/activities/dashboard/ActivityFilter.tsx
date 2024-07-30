import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilters() {
  return (
    <div style={{ width: "100%", marginTop: 25 }}>
      <Menu vertical size="large" style={{ width: "100%" }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="All Activities" />
        <Menu.Item content="I am going" />
        <Menu.Item content="I am hosting" />
      </Menu>
      <Header style={{ marginTop: "20px" }}>
        {" "}
        {/* Add some margin */}
        {/* Optional: You can add a title or description here */}
      </Header>
      <div style={{ marginTop: "20px" }}>
        {" "}
        {/* Add some margin */}
        <Calendar />
      </div>
    </div>
  );
}
