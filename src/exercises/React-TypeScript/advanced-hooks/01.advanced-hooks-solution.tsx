import { useState } from 'react'
import type { Equal, Expect } from '../../../helpers/type-utils'

type TUseId = [string, React.Dispatch<React.SetStateAction<string>>]

export const useId = (defaultId: string): TUseId => {
  const [id, setId] = useState<string>(defaultId)

  return [id, setId] as TUseId
}

// export const useId = (defaultId: string) => {
//   const [id, setId] = useState<string>(defaultId)

//   // return [id, setId] as [string, React.Dispatch<React.SetStateAction<string>>]
//   return [id, setId] as TUseId
// }

const [id, setId] = useId('1')

type tests = [
  Expect<Equal<typeof id, string>>,
  Expect<Equal<typeof setId, React.Dispatch<React.SetStateAction<string>>>>
]
