type RemoveIndexSignature<T> = {
  [key in keyof T as
  string extends key
    ? never
    : number extends key
      ? never
      : symbol extends key
        ? never
        : key
  ]: T[key]
}
