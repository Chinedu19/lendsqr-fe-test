import axios from "axios";

export const baseUrl =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export const getAppUsers = () => {
  return axios.get(baseUrl).then((value) => value.data);
};
