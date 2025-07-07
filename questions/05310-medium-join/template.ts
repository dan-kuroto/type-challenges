type Join<T extends string[], U extends string | number = ','> =
  T extends [infer F extends string, ...infer Rest extends string[]]
    ? Rest['length'] extends 0 ? F : `${F}${U}${Join<Rest, U>}`
    : ''
