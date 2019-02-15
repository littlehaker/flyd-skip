declare module "flyd-skip" {
  interface Skip {
    <T>(count: number, stream: flyd.Stream<T>): flyd.Stream<T>;
  }
  const _Skip: Skip;
  export = _Skip;
}
