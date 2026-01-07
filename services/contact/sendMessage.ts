import axios from "../../config/axios.config";

export default async function sendContactMessage(data) {
  return await axios.post("contact", data);
}
