export type UseWebStorageFunc = () => ReturnType<typeof useWebStorage>

export const useWebStorage = (storage: Storage) => {
  const setItem = (key: string, value: string) => {
    storage.setItem(key, value)
  }

  const getItem = (key: string) => {
    return storage.getItem(key)
  }

  const removeItem = (key: string) => {
    storage.removeItem(key)
  }

  const clear = () => {
    storage.clear()
  }

  return {
    setItem,
    getItem,
    removeItem,
    clear,
  }
}
