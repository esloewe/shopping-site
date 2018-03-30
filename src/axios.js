import axios from "axios";

var instanceAxios = axios.create({
    xsrfCookieName: "mytoken",
    xsrfHeaderName: "csrf-token"
});

export default instanceAxios;
