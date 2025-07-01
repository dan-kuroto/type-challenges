// type PercentageParser<A extends string> =
//   A extends `${infer S}${infer Rest}`
//     ? S extends '+' | '-'
//       ? Rest extends `${infer Rest}%`
//         ? [S, Rest, '%']
//         : [S, Rest, '']
//       : S extends `${number}`
//         ? Rest extends `${infer Rest}%`
//           ? ['', `${S}${Rest}`, '%']
//           : ['', `${S}${Rest}`, '']
//         : ['', '', S]
//     : ['', '', '']

namespace t01978 {
  export type Prefix<T> = T extends '+' | '-' ? T : never
  export type Suffix<T> = T extends `${infer L}%` ? [L, '%'] : [T, '']
}

type PercentageParser<A extends string> =
  A extends `${t01978.Prefix<infer L>}${infer R}`
    ? [L, ...t01978.Suffix<R>]
    : ['', ...t01978.Suffix<A>]
