// interface ButtonProps {
//   children?: React.ReactNode;
// }

type ButtonProps = {
  children?: React.ReactNode
}

// export const Button = ({ children }: { children?: React.ReactNode }) => {
//   return <button>{children}</button>
// }

export const Button = (props: { children?: React.ReactNode }) => {
  return <button>{props.children}</button>
}

const Parent = () => {
  return (
    <>
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  )
}
