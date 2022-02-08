import axios from "axios";

const Axios = () => {
  const url = "http://127.0.0.1:8000/api/";
  const instance = axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {
      Authrorization: localStorage.getItem("access_token")
        ? "JWT " + localStorage.getItem("access_token")
        : null,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  return <div></div>;
};

export default Axios;
