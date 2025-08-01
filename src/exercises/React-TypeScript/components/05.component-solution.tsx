import type { ComponentProps } from 'react'
import type { Equal, Expect } from '../../../helpers/type-utils'

export const Input = (
  props: Omit<ComponentProps<'input'>, 'onChange'> & {
    onChange: (value: string) => void
  }
) => {
  return (
    <input
      {...props}
      onChange={e => {
        props.onChange(e.target.value)
      }}></input>
  )
}

const Parent = () => {
  return (
    <Input
      onChange={e => {
        console.log(e)

        type test = Expect<Equal<typeof e, string>>
      }}></Input>
  )
}
