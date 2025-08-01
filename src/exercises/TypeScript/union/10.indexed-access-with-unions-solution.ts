export const programingLanguages = {
  JAVASCRIPT: 'javascript',
  REACTJS: 'reactjs',
  PHP: 'php',
  PYTHON: 'python',
  VUE: 'vue',
  RUBY: 'ruby',
} as const
type ProgrammingKeys = keyof typeof programingLanguages
type ProgrammingType = (typeof programingLanguages)[ProgrammingKeys]
export type IndividualLanguage = Exclude<
  ProgrammingType,
  'javascript' | 'reactjs'
>
// type IndividualProgram = "php" | "python" | "vue" | "ruby"
