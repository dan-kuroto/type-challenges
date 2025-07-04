type TupleToNestedObject<T extends any[], U> = T extends [infer F extends PropertyKey, ...infer Rest] ? { [K in F]: TupleToNestedObject<Rest, U> } : U
