import { Equal, Expect } from '@/type-utils'

type ReturnTypeOfFunction<T> = T extends (...args: any) => infer P ? P : never

// Test cases
type Case1 = Expect<Equal<ReturnTypeOfFunction<() => number>, number>> // number
type Case2 = Expect<
  Equal<ReturnTypeOfFunction<(x: string) => boolean>, boolean>
> // boolean
