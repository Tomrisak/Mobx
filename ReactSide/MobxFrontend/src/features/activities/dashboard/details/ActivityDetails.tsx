import LoadingComponent from "../../../../app/layout/LoadingComponent";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivitiyDetailedChat from "./ActivityDetailedChat";
import ActivitiyDetailedInfo from "./ActivityDetailedInfo";
import ActivitiyDetailedHeader from "./ActivityDetailedHeader";
import ActivitiyDetailedSideBar from "./ActivityDetailedSideBar";
import { Grid } from "semantic-ui-react";

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
    <Grid>
      <Grid.Column width={10}>
        <ActivitiyDetailedHeader activity={activity}></ActivitiyDetailedHeader>
        <ActivitiyDetailedInfo activity={activity}></ActivitiyDetailedInfo>
        <ActivitiyDetailedChat></ActivitiyDetailedChat>
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivitiyDetailedSideBar></ActivitiyDetailedSideBar>
      </Grid.Column>
    </Grid>
  );
});
