namespace t04260 {
  export type All<T extends string> = T extends `${infer F}${infer Rest}` ? F | All<Rest> : T
}

type AllCombinations<
  S extends string,
  CharUnion extends string = t04260.All<S>,
  CurrChar extends string = CharUnion,
> =
  CurrChar extends CurrChar
    ? `${CurrChar}${AllCombinations<'', Exclude<CharUnion, CurrChar>> | ''}`
    : never
