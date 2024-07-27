import axios, { AxiosResponse } from "axios";
import { Activity } from "../../models/activity";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
// Set the base URL for axios requests
axios.defaults.baseURL = "http://localhost:5270/api";
axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

// A helper function to extract the data from the response
const responseBody = <T,>(response: AxiosResponse<T>): T => response.data;

// Define the requests object to handle different HTTP methods
const requests = {
  get: <T,>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T,>(url: string, body: {} = {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T,>(url: string, body: {} = {}) =>
    axios.put<T>(url, body).then(responseBody),
  delete: <T,>(url: string) => axios.delete<T>(url).then(responseBody),
};

// Define the Activities API calls
const Activities = {
  list: () => requests.get<Activity[]>("/activities"),
  details: (id: string) => requests.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) => axios.post<void>("/activities", activity),
  update: (activity: Activity) =>
    axios.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string) => axios.delete<void>(`/activities/${id}`),
};
// Export the agent object with Activities API
const agent = {
  Activities,
};

export default agent;
