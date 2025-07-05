type Flip<T extends Record<string, string | number | boolean>> = {
  [key in keyof T as T[key] extends PropertyKey ? T[key] : `${T[key]}`]: key
}
