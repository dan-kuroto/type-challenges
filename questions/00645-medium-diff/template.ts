type Diff<O, O1> = {
  [
  K in keyof O | keyof O1 as
  K extends keyof O
    ? K extends keyof O1
      ? never
      : K
    : K
  ]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
}
