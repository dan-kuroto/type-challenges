namespace t02759 {
  export type All<T> = { [k in keyof T]: T[k] }
}

type RequiredByKeys<T, K extends keyof T = keyof T> = t02759.All<{
  [key in keyof T as key extends K ? key : never]-?: T[key]
} & {
  [key in keyof T as key extends K ? never : key]: T[key]
}>
