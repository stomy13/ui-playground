import { useWebStorage } from './useWebStorage'

export const useLocalStorage = () => {
  return useWebStorage(localStorage)
}
