type LengthOfString<S extends string, A extends string[] = []> =
  S extends `${infer C}${infer Rest}`
    ? LengthOfString<Rest, [C, ...A]>
    : A['length']
