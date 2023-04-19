export type CustomRequest = Request & {
  headers: IncomingHttpHeaders & {
    api: string;
  };
}