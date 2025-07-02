namespace t02757 {
  export type All<T> = { [K in keyof T]: T[K] }
}

type PartialByKeys<T, K extends keyof T = any> = t02757.All<{
  [key in keyof T as key extends K ? key : never]?: T[key]
} & {
  [key in keyof T as key extends K ? never : key]: T[key]
}>
