export interface UpdateFunction<T, R = unknown> {
  update: (params: R) => Promise<T>
}
