import { useWebStorage } from './useWebStorage'

export const useSessionStorage = () => {
  return useWebStorage(sessionStorage)
}
