type AppendArgument<T extends (...args: any) => any, K> = T extends (
  ...args: infer A
) => infer R
  ? (x: K, ...args: A) => R
  : never
type SomeF = (a: number, b: string) => number
type FinalF = AppendArgument<SomeF, boolean>
// FinalF is (x: boolean, a: number, b: string) => number
