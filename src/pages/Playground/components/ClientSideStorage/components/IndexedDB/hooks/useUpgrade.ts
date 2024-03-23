export const useUpgrade = () => {
  const upgrade = (db: IDBDatabase, dbVersion: number) => {
    const upgradeFunc = upgradeFuncs[dbVersion]
    if (upgradeFunc) {
      upgradeFunc(db)
    }
  }

  return { upgrade }
}

type UpgradeFunc = (db: IDBDatabase) => void

const upgradeFuncs: Record<number, UpgradeFunc | undefined> = {
  1: (db: IDBDatabase) => {
    const swingStore = db.createObjectStore('swing', { keyPath: 'id' })
    swingStore.createIndex('name', 'name', { unique: false })
    swingStore.createIndex('uuid', 'uuid', { unique: true })
    swingStore.transaction.oncomplete = () => {
      console.log('Database created')
    }
  },
  2: (db: IDBDatabase) => {
    console.log('Upgrade to version 2', db)
  },
  3: (db: IDBDatabase) => {
    console.log('Upgrade to version 3', db)
  },
}
