import axiosClient from "../../api/axiosClient";

const POST_signIn = (user) => {
  const url = "/auth/sign-in";
  return axiosClient.post(url, user);
};

export default POST_signIn;
