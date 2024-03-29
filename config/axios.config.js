import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_VERSION}`,
});

instance.defaults.headers.common["Api-Key-Access"] =
  process.env.NEXT_PUBLIC_API_KEY;

export default instance;
