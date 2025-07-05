type BEM<B extends string, E extends string[], M extends string[]> = [
  B,
  E[number] extends never ? '' : `__${E[number]}`,
  M[number] extends never ? '' : `--${M[number]}`,
] extends [infer A extends string, infer B extends string, infer C extends string]
  ? `${A}${B}${C}`
  : never
