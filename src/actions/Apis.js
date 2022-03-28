import axios from "axios";
import Swal from "sweetalert2";
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
});
let errorCatch = false;
instance.interceptors.response.use(
  function (config) {
    errorCatch = false;
    return config;
  },
  function (error) {
    if (error.response && error.response.status) {
      if (error.response.status === 401) {
        if (!errorCatch) {
          //Swal.warning("Tài khoản hết hiệu lực sử dụng");
          Swal.fire({
            text: "Tài khoản hết hiệu lực sử dụng",
            icon: "warning",
          }).then(() => {
            localStorage.clear();
            window.location.reload(false);
          });
        }
        errorCatch = true;
      }
    }
    return Promise.reject(error);
  },
);
export const fetchRoomEmpty = function (idRank, checkIn, checkOut) {
    let token = JSON.parse(localStorage.getItem("user")).accessToken;
    const req = instance.get(
      `/rooms/getby-rank-room/${idRank}/${checkIn}/${checkOut}`,
      {
        headers: { "x-access-token": token },
      },
    );
    return req;
  };