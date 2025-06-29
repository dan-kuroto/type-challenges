type StringToUnion<T extends string> = T extends `${infer S}${infer Rest}` ? S | StringToUnion<Rest> : never
