type ReplaceKeys<U, T extends PropertyKey, Y> = {
  [key in keyof U]: key extends T
    ? key extends keyof Y
      ? Y[key] : never
    : U[key]
}
