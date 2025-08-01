const complexObj = {
  javascript: {
    label: 'Javascript',
  },
  typescript: {
    label: 'Typescript',
  },
  reactjs: {
    label: 'Reactjs',
  },
}
type ComplexObj = keyof typeof complexObj

export {}
// Expected: type ComplexObj = "javascript" | "typescript" | "reactjs"
