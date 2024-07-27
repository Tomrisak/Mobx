import { Button, Form, Segment } from "semantic-ui-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { Activity } from "../../../../models/activity";
import LoadingComponent from "../../../../app/layout/LoadingComponent";

export default observer(function ActivityForm() {
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loading,
    loadActivitiy,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();
  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (id) loadActivitiy(id).then((activity) => setActivity(activity!));
  }, [id, loadActivitiy]);

  function handleSubmit() {
    activity.id ? updateActivity(activity) : createActivity(activity);
  }
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }
  if (loadingInitial)
    return <LoadingComponent content="Loading activity..."></LoadingComponent>;

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="Off">
        <Form.Input
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        ></Form.Input>
        <Form.Input
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        ></Form.Input>
        <Form.Input
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        ></Form.Input>
        <Form.Input type="date" placeholder="Date"></Form.Input>
        <Form.Input placeholder="City"></Form.Input>
        <Form.Input placeholder="Venue"></Form.Input>
        <Button
          loading={loading}
          floated="right"
          positive
          type="submit"
          content="Submit"
        ></Button>
        <Button
          as={Link}
          to="activities"
          floated="right"
          type="button"
          content="Cancel"
        ></Button>
      </Form>
    </Segment>
  );
});
