type Name = ReplaceSpaceWithDash<'Emmylou Harris'>
type ReplaceSpaceWithDash<T extends string> =
  T extends `${infer FirstName} ${infer LastName}`
    ? `${FirstName}-${LastName}`
    : never
//   ^? "Emmylou-Harris"

type DashName = Replace<'Matt Pocock', ' ', '-'>
type Replace<
  S extends string,
  R extends string,
  D extends string
> = S extends `${infer FirstName}${R}${infer LastName}`
  ? `${FirstName}${D}${LastName}`
  : never
//   ^? "Matt-Pocock"

type Result = StringReplace<'Evondev Frontend Developer', ' ', '-'>
type StringReplace<
  S extends string,
  R extends string,
  D extends string
> = S extends `${infer FirstName}${R}${infer LastName}`
  ? `${FirstName}${D}${StringReplace<LastName, R, D>}`
  : S
//   ^? "Evondev-Frontend-Developer"
