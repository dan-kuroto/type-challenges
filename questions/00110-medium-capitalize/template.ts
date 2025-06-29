type MyCapitalize<S extends string> = S extends `${infer A}${infer Rest}` ? `${Uppercase<A>}${Rest}` : S
