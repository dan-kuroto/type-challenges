type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer A}` ? A : `${T}`
