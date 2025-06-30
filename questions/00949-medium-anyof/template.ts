// type AnyOf<T extends readonly any[]> =
//  T extends [infer F, ...infer Rest]
//    ? F extends 0 | '' | false | [] | { [K: PropertyKey]: never } | undefined | null
//      ? AnyOf<Rest>
//      : true
//    : false

// type AnyOf<T extends readonly any[]> =
//  T extends (0 | '' | false | [] | { [K: PropertyKey]: never } | undefined | null)[]
//    ? false : true

type AnyOf<T extends readonly any[]> =
 T[number] extends 0 | '' | false | [] | { [K: PropertyKey]: never } | undefined | null
   ? false : true
