type Without<T extends any[], U, C extends any[] = []> =
  T extends [infer F, ...infer Rest]
    ? (U extends any[] ? (F extends U[number] ? true : false) : (F extends U ? true : false)) extends true
        ? [...C, ...Without<Rest, U, C>]
        : [...C, F, ...Without<Rest, U, C>]
    : []
