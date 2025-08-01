import {
  forwardRef,
  useReducer,
  useRef,
  useState,
  type ComponentProps,
  type ComponentPropsWithRef,
  type ElementRef,
} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { EventFor, TButtonType, TLibrary } from './.'
type TRef = ElementRef<typeof OtherComponent>

// const data: { name: string; age: number }[] = [
//   {
//     name: 'John',
//     age: 30,
//   },
//   {
//     name: 'Jane',
//     age: 25,
//   },
//   {
//     name: 'Doe',
//     age: 40,
//   },
// ]

function App() {
  // useState in React in TypeScript
  const [count, setCount] = useState<number>(0)
  // const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<TRef>(null)

  const handleChange = (e: EventFor<'button', 'onChange'>) => {
    console.log(e)
  }

  // function button() {
  //   const [buttonType, setButtonType] = useState<TButtonType>('button')
  //   const [iconType, setIconType] = useState<TLibrary['icon']>('user')
  //   return <button type={buttonType}></button>
  // }

  // useReducer in React in TypeScript
  type TCounter = {
    age: number
  }
  type TAction = {
    type: 'increment-age' | 'decrement-age'
  }
  function counterReducer(state: TCounter, action: TAction) {
    switch (action.type) {
      case 'increment-age':
        return { ...state, age: state.age + 1 }
      case 'decrement-age':
        return { ...state, age: state.age - 1 }
      default:
        break
    }
    return state
  }

  function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { age: 24 })

    return (
      <>
        <button
          onClick={() => {
            dispatch({ type: 'increment-age' })
          }}>
          Increment Age
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement-age' })
          }}>
          Decrement Age
        </button>
        <p>Hello! You are {state.age}</p>
      </>
    )
  }

  return (
    <>
      {/* <OtherComponent ref={ref}>Hello</OtherComponent> */}
      <input
        onChange={e => {
          handleChange(e)
        }}
      />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <Counter /> */}
      {/* <Audio /> */}
      {/* <Status text="Bido" className="inline-block" /> */}
      {/* <Row icon={UserIcon} /> */}
      {/* <Tag tag={'div'} /> */}
      {/* {data.map((item, index) => (
        <div key={index}>Item {item.name}</div>
      ))} */}
      {/* <BoxedItemWithRef
        data={[
          {
            name: 'John',
            age: 30,
            job: 'Developer',
          },
        ]}
        renderData={item => <div>{item.name}</div>}
      /> */}
    </>
  )

  function Audio() {
    const audioRef = useRef<HTMLAudioElement>(null)
    return (
      <>
        <audio ref={audioRef} src="" controls></audio>
      </>
    )
  }
}

const OtherComponent = forwardRef<
  HTMLTableElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return <table ref={ref}>{children}</table>
})

function AudioPlayer({ children, ...rest }: { children: React.ReactNode }) {
  return { children }
}

// function Status(props: { text: string }) {
//   return <span>{props.text}</span>
// }

// destructuring props
// function Status({ text }: { text?: string }) {
//   return <span>{text}</span>
// }

// type TStatus = {
//   text: string
// }
// function Status({ text }: TStatus) {
//   return <span>{text}</span>
// }

interface TStatus extends ComponentProps<'span'> {
  text: string
}
function Status({ text, ...rest }: TStatus) {
  return <span {...rest}> {text}</span>
}
type TButtonPropsWithRef = ComponentPropsWithRef<typeof OtherComponent>
// import {Button} from 'some-library'
// type TButtonType = ComponentProps<typeof Button>['type']

const Row = (props: {
  icon: React.ComponentType<{
    className?: string
  }>
}) => {
  return (
    <div>
      <props.icon className="icon" />
    </div>
  )
}

function UserIcon() {
  return <div>user Icon</div>
}

const Tag = (props: {
  tag: React.ElementType<{
    className?: string
  }>
}) => {
  return (
    <div>
      <props.tag className="tag" />
    </div>
  )
}

// function fixedForwardRef<T, P = Record<string, any>>(
//   render: (props: P, ref: React.Ref<T>) => React.ReactNode
// ): (props: P & React.RefAttributes<T>) => React.ReactNode {
//   return React.forwardRef(render) as any
// }

// const BoxedItem2 = <T,>() => {}

function BoxedItem<T>(
  {
    data,
    renderData,
  }: {
    data: T[]
    renderData: (item: T) => React.ReactNode
  },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <div ref={ref}>{data.map(item => renderData(item))}</div>
}

// const BoxedItemWithRef = fixedForwardRef(BoxedItem)

export default App
