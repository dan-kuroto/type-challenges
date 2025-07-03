type Shift<T extends any[]> = T extends [infer F, ...infer Rest] ? Rest : []
