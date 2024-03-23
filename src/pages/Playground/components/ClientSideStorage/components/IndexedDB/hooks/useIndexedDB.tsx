const dbName = 'playground'
const dbVersion = 1

type TransactionInfo = {
  storeNames: string | Iterable<string>
  mode?: IDBTransactionMode
}

export const useIndexedDB = () => {
  const open = (txInfo: TransactionInfo) => {
    return new Promise<IDBTransaction>((resolve, reject) => {
      const request = indexedDB.open(dbName, dbVersion)
      request.onerror = () => {
        reject(request.error)
      }
      request.onsuccess = () => {
        const db = request.result
        db.onerror = event => {
          if (event.target instanceof IDBTransaction) {
            console.error('Database error IDBTransaction', event.target.error)
          } else {
            console.error('Database error', event.target)
          }
        }
        const tx = db.transaction(txInfo.storeNames, txInfo.mode)
        resolve(tx)
      }
      request.onupgradeneeded = () => {
        const db = request.result
        const swingStore = db.createObjectStore('swing', { keyPath: 'id' })
        swingStore.createIndex('name', 'name', { unique: false })
        swingStore.createIndex('uuid', 'uuid', { unique: true })
        swingStore.transaction.oncomplete = () => {
          console.log('Database created')
        }
      }
    })
  }

  const putItem = (tx: IDBTransaction, storeName: string, item: unknown) => {
    return new Promise<void>((resolve, reject) => {
      const store = tx.objectStore(storeName)
      const request = store.put(item)
      request.onerror = () => {
        reject(request.error)
      }
      request.onsuccess = () => {
        resolve()
      }
    })
  }

  const getItem = (tx: IDBTransaction, storeName: string, key: IDBValidKey) => {
    return new Promise<string>((resolve, reject) => {
      const store = tx.objectStore(storeName)
      const request = store.get(key)
      request.onerror = () => {
        reject(request.error)
      }
      request.onsuccess = () => {
        resolve(JSON.stringify(request.result))
      }
    })
  }

  const deleteItem = (
    tx: IDBTransaction,
    storeName: string,
    key: IDBValidKey,
  ) => {
    return new Promise<void>((resolve, reject) => {
      const store = tx.objectStore(storeName)
      const request = store.delete(key)
      request.onerror = () => {
        reject(request.error)
      }
      request.onsuccess = () => {
        resolve()
      }
    })
  }

  return {
    open,
    putItem,
    getItem,
    deleteItem,
  }
}
