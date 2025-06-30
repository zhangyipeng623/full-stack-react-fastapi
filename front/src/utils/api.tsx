import axios from "axios";
import { settings } from "@/utils/settings";

export const server = axios.create({
  baseURL: `http://${settings.server.ip}:${settings.server.port}`,
});
