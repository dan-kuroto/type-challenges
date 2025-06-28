type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V,
  ): Chainable<{ [P in keyof T as P extends K ? never : P]: T[P] } & { [P in K]: V }>
  get(): T
}
