export interface LoadFunction<T, R = unknown> {
  load: (params?: R) => Promise<T>
}
