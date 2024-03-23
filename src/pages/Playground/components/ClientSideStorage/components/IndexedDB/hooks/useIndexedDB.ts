import { useUpgrade } from './useUpgrade'

const dbName = 'playground'
const dbVersion = 1

type TransactionInfo = {
  storeNames: string | Iterable<string>
  mode?: IDBTransactionMode
}

export const useIndexedDB = () => {
  const { upgrade } = useUpgrade()
  const open = (txInfo: TransactionInfo) => {
    return new Promise<IDBTransaction>((resolve, reject) => {
      const request = indexedDB.open(dbName, dbVersion)
      request.onerror = () => {
        reject(request.error)
      }
      request.onsuccess = () => {
        const db = request.result
        db.onerror = e => {
          if (e.target instanceof IDBTransaction) {
            console.error('Database error IDBTransaction', e.target.error)
          } else {
            console.error('Database error', e.target)
          }
        }
        const tx = db.transaction(txInfo.storeNames, txInfo.mode)
        resolve(tx)
      }
      request.onupgradeneeded = e => {
        // データベースが削除される場合は何もしない
        if (e.newVersion === null) {
          return
        }
        // データベースのバージョンアップグレード
        const db = request.result
        for (let i = e.oldVersion; i < e.newVersion; i++) {
          const nextVersion = i + 1
          console.log('Upgrade database from version', i, 'to', nextVersion)
          upgrade(db, nextVersion)
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
