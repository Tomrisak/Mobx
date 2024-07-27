import LoadingComponent from "../../../../app/layout/LoadingComponent";
import { useStore } from "../../../../app/stores/store";
import { Button, Card, Image } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivitiy,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivitiy(id);
  }, [id, loadActivitiy]);

  if (loadingInitial || !activity) return <LoadingComponent></LoadingComponent>;
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button as={Link} to={`/manage/${activity.id}`}basic color="red" s content="Edit"></Button>
          <Button as={Link} to={`/activities`}basic color="grey" content="Cancel"></Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
});
