import { useStorage } from './useStorage'

export const useLocalStorage = () => {
  return useStorage(localStorage)
}
