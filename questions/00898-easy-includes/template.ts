namespace t00898 {
  export type Equal<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false
}

type Includes<T extends readonly any[], U> =
  T extends [infer S, ...infer Rest]
    ? (
        t00898.Equal<U, S> extends true
          ? true
          : Includes<Rest, U>
      )
    : false
