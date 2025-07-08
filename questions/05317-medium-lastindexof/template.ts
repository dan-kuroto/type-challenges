namespace t05317 {
  export type Equal<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2)
    ? true : false
}

type LastIndexOf<T extends any[], U> =
  T extends [...infer Rest, infer L]
    ? t05317.Equal<L, U> extends true ? Rest['length'] : LastIndexOf<Rest, U>
    : -1
