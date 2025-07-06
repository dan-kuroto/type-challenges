type Chunk<T extends any[], U extends number, S extends any[] = [], V extends any[] = []> =
  T extends [infer F, ...infer R]
    ? S['length'] extends U
      ? Chunk<R, U, [F], [...V, S]>
      : Chunk<R, U, [...S, F], V>
    : S['length'] extends 0
      ? V
      : [...V, S]
