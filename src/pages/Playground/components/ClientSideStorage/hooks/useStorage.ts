export type UseStorageFunc = () => ReturnType<typeof useStorage>

export const useStorage = (storage: Storage) => {
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
