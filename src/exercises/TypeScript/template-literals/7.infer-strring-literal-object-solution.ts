interface ApiData {
  'maps:longitude': string
  'maps:latitude': string
}
type RemoveMapsFromObj<T> = {
  [K in keyof T as RemoveMap<K>]: T[K]
}

type RemoveMap<T> = T extends `maps:${infer R}` ? R : never

type DesiredShape = RemoveMapsFromObj<ApiData>
// type DesiredShape = {
//   "longitude": string;
//   "latitude": string;
// }
