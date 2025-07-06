type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  CurrIdx extends any[] = [],
  CurrArr extends any[] = T,
  NeedFill extends boolean = CurrIdx['length'] extends Start ? true : false,
> =
  CurrIdx['length'] extends End
    ? CurrArr
    : CurrArr extends [infer F, ...infer Rest]
      ? [
          NeedFill extends true ? N : CurrIdx['length'] extends Start ? N : F,
          ...Fill<T, N, Start, End, [1, ...CurrIdx], Rest, NeedFill extends true ? NeedFill : CurrIdx['length'] extends Start ? true : false>,
        ]
      : []

type a = Fill<[1, 2, 3], true, 1, 3>
