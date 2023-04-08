export interface DeleteFunction<T, R = any> {
  delete: (params: R) => Promise<T>
}
