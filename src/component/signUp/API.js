import axiosCLient from "../../api/axiosClient";

const POST_signUp = async (userInfo) => {
  const url = "/auth/sign-up";
  return axiosCLient.post(url, userInfo);
};

export default POST_signUp;
