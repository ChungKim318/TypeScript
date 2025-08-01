export const myObject = {
  a: 1,
  b: 2,
  c: 3,
}

// type Keys = keyof typeof myObject

function getObjectKey<O extends Record<string, any>>(obj: O): (keyof O)[] {
  return Object.keys(obj) as (keyof O)[]
}

getObjectKey(myObject).forEach(key => {
  console.log(myObject[key])
})
