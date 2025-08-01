// Imagine NavBar is an external library!

import type { ComponentProps, ComponentPropsWithRef } from 'react'
import type { Equal, Expect } from '../../../helpers/type-utils'

export const NavBar = (props: {
  title: string
  links: string[]
  children: React.ReactNode
}) => {
  return <div>Some content</div>
}

// Your app:

type NavBarProps = ComponentPropsWithRef<typeof NavBar>

type test = Expect<
  Equal<
    NavBarProps,
    {
      title: string
      links: string[]
      children: React.ReactNode
    }
  >
>
