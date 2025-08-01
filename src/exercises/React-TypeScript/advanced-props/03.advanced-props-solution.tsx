type ModalProps = (
  | {
      variant: 'no-title'
    }
  | {
      variant: 'title'
      title: string
    }
) & {
  buttonColor: string
}

export const Modal = (props: ModalProps) => {
  if (props.variant === 'no-title') {
    return (
      <div>
        <span>No title</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}>
          Click me!
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <span>Title: {props.title}</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}>
          Click me!
        </button>
      </div>
    )
  }
}

export const Test = () => {
  return (
    <div>
      <Modal buttonColor="red" variant="no-title" />
      <Modal buttonColor="red" variant="no-title" />
      <Modal variant="title" title="Hello" buttonColor="red" />
    </div>
  )
}
