import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Storage } from '../Storage/Storage'

// https://developer.mozilla.org/ja/docs/Web/API/StorageEvent も触ってみたい
export function LocalStorage() {
  return (
    <Storage
      description="Local Storage はタブを閉じてもデータが維持される"
      useStorage={useLocalStorage}
    />
  )
}
