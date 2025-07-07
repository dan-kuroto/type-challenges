type Trunc<T extends number | string> =
  `${T}` extends `${infer F extends '+' | '-'}${infer Rest}`
    ? Rest extends `${infer N extends number}.${infer Rest}`
      ? `${F}${N}`
      : `${F}0`
    : `${T}` extends `${infer N extends number}.${infer Rest}`
      ? `${N}`
      : `${T}` extends `.${infer Rest}` ? '0' : `${T}`
