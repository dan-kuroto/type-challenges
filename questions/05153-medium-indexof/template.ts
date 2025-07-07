namespace t05153 {
  export type Equal<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? true : false
}

type IndexOf<T extends any[], U, C extends any[] = []> =
  T extends [infer F, ...infer Rest]
    ? t05153.Equal<F, U> extends true
      ? C['length']
      : IndexOf<Rest, U, [...C, 1]>
    : -1
