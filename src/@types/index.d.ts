export type CustomRequest = Request & {
  headers: IncomingHttpHeaders & {
    x_api_key: string;
  };
}