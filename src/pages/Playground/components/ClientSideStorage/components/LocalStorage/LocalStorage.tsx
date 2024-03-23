import { useLocalStorage } from '../../hooks/useLocalStorage'
import { WebStorage } from '../WebStorage/WebStorage'

// https://developer.mozilla.org/ja/docs/Web/API/StorageEvent も触ってみたい
export function LocalStorage() {
  return (
    <WebStorage
      description="Local Storage はタブを閉じてもデータが維持される"
      useStorage={useLocalStorage}
    />
  )
}
