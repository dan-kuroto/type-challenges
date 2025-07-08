type Unique<T extends readonly any[], C extends any[] = []> =
  T extends [infer F, ...infer Rest]
    ? Includes<C, F> extends true ? Unique<Rest, C> : Unique<Rest, [...C, F]>
    : C
