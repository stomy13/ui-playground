import { useStorage } from './useStorage'

export const useSessionStorage = () => {
  return useStorage(sessionStorage)
}
