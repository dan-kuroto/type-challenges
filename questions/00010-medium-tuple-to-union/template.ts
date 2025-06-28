type TupleToUnion<T extends any[]> = T extends [infer S, ...infer Rest] ? S | TupleToUnion<Rest> : never
