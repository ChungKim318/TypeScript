import { Equal, Expect } from '@/type-utils'

type PropertyType<T extends Record<string, any>, K extends keyof T> = T[K]

// Test cases
type ExampleType = { name: string; age: number; isStudent: boolean }
type NameType = Expect<Equal<PropertyType<ExampleType, 'name'>, string>> // string
type AgeType = Expect<Equal<PropertyType<ExampleType, 'age'>, number>> // number
type StudentType = Expect<
  Equal<PropertyType<ExampleType, 'isStudent'>, boolean>
> // boolean
