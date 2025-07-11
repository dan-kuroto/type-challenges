namespace t04425 {
  type ParseInt<T> = T extends `${infer X extends number}` ? X : never

  type RemoveLeadingZeros<T extends string> = T extends '0' ? T : (
    T extends `${0}${infer Rest}` ? RemoveLeadingZeros<Rest> : T
  )

  type InnerMinusOne<T extends string> = T extends `${infer X extends number}${infer Y}` ? (
    X extends 0 ? `9${InnerMinusOne<Y>}` : `${[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8][X]}${Y}`
  ) : ''

  type Reverse<T extends string> = T extends `${infer X}${infer Y}` ? `${Reverse<Y>}${X}` : ''

  type MinusOne<T extends number> = ParseInt<RemoveLeadingZeros<Reverse<InnerMinusOne<Reverse<`${T}`>>>>>

  type InnerGreaterThan<T extends number, U extends number> = T extends U ? true : (
    T extends 0 ? false : InnerGreaterThan<MinusOne<T>, U>
  )

  export type GreaterThan<T extends number, U extends number> = T extends U ? false : (
    U extends 0 ? true : InnerGreaterThan<T, U>
  )
}

type GreaterThan<T extends number, U extends number> = t04425.GreaterThan<T, U>
