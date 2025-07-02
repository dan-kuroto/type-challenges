type StartsWith<T extends string, U extends string> =
  U extends `${infer U0}${infer URest}`
    ? T extends `${infer T0}${infer TRest}`
      ? U0 extends T0
        ? StartsWith<TRest, URest>
        : false
      : false
    : true
