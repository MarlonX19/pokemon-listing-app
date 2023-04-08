export interface AddFunction<T, R = unknown> {
  add: (params: R) => Promise<T>
}