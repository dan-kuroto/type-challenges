type ObjectEntries<T> = {
  [key in keyof Required<T>]: [key, Required<T>[key] extends never ? T[key] : Required<T>[key]]
}[keyof Required<T>]
