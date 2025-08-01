export const getDeepValue = <
  Obj extends Record<string, any>,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey]
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
) => {
  return obj[firstKey][secondKey]
}
const obj = {
  bar: {
    d: 2,
  },
}
const result = getDeepValue(obj, 'bar', 'd')
console.log(result)
// result = 2
