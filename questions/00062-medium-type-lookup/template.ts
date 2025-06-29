type LookUp<U extends { type: string }, T> = U extends { type: T } ? U : never
