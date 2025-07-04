type FlattenDepth<T extends any[], D extends number = 1, C extends any[] = []> =
  T extends [infer F, ...infer Rest]
    ? F extends any[]
      ? D extends C['length']
        ? [F, ...FlattenDepth<Rest, D, C>]
        : [...FlattenDepth<F, D, [0, ...C]>, ...FlattenDepth<Rest, D, C>]
      : [F, ...FlattenDepth<Rest, D, C>]
    : []

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>
