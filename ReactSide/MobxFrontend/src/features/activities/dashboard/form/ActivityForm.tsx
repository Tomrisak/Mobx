import { Button, Form, Header, Label, Segment } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { Activity } from "../../../../models/activity";
import LoadingComponent from "../../../../app/layout/LoadingComponent";
import { Formik, Field, Form as FormikForm } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../../app/common/form/MyTextInput";
import MyTextAre from "./MyTextArea";
import MyTextArea from "./MyTextArea";
import MySelectInput from "./MySelectInput";
import { categoryOptions } from "../options/categoryOptions";

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

  const validationSchema = Yup.object({
    title: Yup.string().required("The activity title is required"),
    description: Yup.string().required("The activity description is required"),
    category: Yup.string().required("The activity category is required"),
    date: Yup.string().required("The activity date is required"),
    venue: Yup.string().required("The activity venue is required"),
    city: Yup.string().required("The activity city is required"),
  });

  useEffect(() => {
    if (id) loadActivitiy(id).then((activity) => setActivity(activity!));
  }, [id, loadActivitiy]);

  if (loadingInitial) {
    return <LoadingComponent content="Loading activity..." />;
  }
  function handleFormSubmit(activity: Activity) {
    //   if (!activity.id) {
    //     // Check if id is not present
    //     const newActivity = {
    //       ...activity,
    //       id: uuid(), // Generate a new UUID for the activity
    //     };
    //     createActivity(activity).then(() =>
    //       //history.push(`/activities/${newActivity.id}`)
    //     ); // Redirect to the new activity's page
    //   } else {
    //     updateActivity(activity).then(() =>
    //       //history.push(`/activities/${activity.id}`)
    //     ); // Redirect to the updated activity's page
    //   }
  }

  return (
    <Segment clearing>
      <Header content="Activity Details" sub color="teal"></Header>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <FormikForm className="ui form" autoComplete="off">
            <MyTextInput name="title" placeholder="Title" label="Title" />
            <MyTextArea
              name="description"
              rows={3}
              placeholder="Description"
              label="Description"
            />
            <MySelectInput
              name="category"
              placeholder="Category"
              label="Category"
              option={categoryOptions}
            />
            <MyTextInput name="date" placeholder="Date" label="Date" />
            <Header content="Location Details" sub color="teal"></Header>
            <MyTextInput name="city" placeholder="City" label="City" />
            <MyTextInput name="venue" placeholder="Venue" label="Venue" />
            <Button
              disabled={isSubmitting || !dirty || !isValid}
              loading={loading}
              floated="right"
              positive
              type="submit"
              content="Submit"
            />
            <Button
              as={Link}
              to="/activities"
              floated="right"
              type="button"
              content="Cancel"
            />
          </FormikForm>
        )}
      </Formik>
    </Segment>
  );
});
function uuid() {
  throw new Error("Function not implemented.");
}
