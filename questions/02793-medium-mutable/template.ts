type Mutable<T extends { [p: PropertyKey]: any }> = {
  -readonly[p in keyof T]: T[p]
}
