type Zip<T extends any[], U extends any[]> =
  T extends [infer TF, ...infer TRest]
    ? U extends [infer UF, ...infer URest]
      ? [[TF, UF], ...Zip<TRest, URest>]
      : []
    : []
