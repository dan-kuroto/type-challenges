namespace t02257 {
  export type Reverse<S extends string> = S extends `${infer F}${infer Rest}` ? `${Reverse<Rest>}${F}` : ''
  export type MinusOne<S extends string> = S extends `${infer F extends number}${infer Rest}`
    ? F extends 0 ? `9${MinusOne<Rest>}` : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][F]}${Rest}`
    : ''
  export type TrimLeftZero<S extends string> = S extends `0${infer Rest}` ? Rest extends '' ? S : TrimLeftZero<Rest> : S
  export type ParseInt<S extends string> = S extends `${infer N extends number}` ? N : never
}

type MinusOne<T extends number> = t02257.ParseInt<t02257.TrimLeftZero<t02257.Reverse<t02257.MinusOne<t02257.Reverse<`${T}`>>>>>
