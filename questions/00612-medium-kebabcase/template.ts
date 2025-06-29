type KebabCase<S extends string> =
  S extends '' ? '' :
    S extends `${infer F}${infer Rest}`
      ? Rest extends Capitalize<Rest>
        ? Rest extends Uncapitalize<Rest>
          ? `${Uncapitalize<F>}${KebabCase<Rest>}`
          : `${Uncapitalize<F>}-${KebabCase<Uncapitalize<Rest>>}`
        : `${Uncapitalize<F>}${KebabCase<Rest>}`
      : never
