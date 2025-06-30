interface ServerConfig {
  ip: string;
  port: number;
}
interface Config {
  title: string;
  server: ServerConfig;
}
export const settings: Config = {
  title: "React FastAPI",
  server: {
    ip: "localhost",
    port: 8000,
  },
};
