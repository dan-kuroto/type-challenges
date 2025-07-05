type Fibonacci<T extends number, CurrIdx extends any[] = [1], Prev extends any[] = [], Curr extends any[] = [1]> =
  CurrIdx['length'] extends T
    ? Curr['length']
    : Fibonacci<T, [1, ...CurrIdx], Curr, [...Prev, ...Curr]>
