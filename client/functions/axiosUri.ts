import axios from "axios";
const url = process.env.SERVER_URI;

export default axios.create({ baseURL: url });
