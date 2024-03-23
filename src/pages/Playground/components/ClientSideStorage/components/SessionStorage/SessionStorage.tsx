import { useSessionStorage } from '../../hooks/useSessionStorage'
import { Storage } from '../Storage/Storage'

export function SessionStorage() {
  return (
    <Storage
      description={
        'Session Storage はタブを閉じるとデータが失われる\nページセッションが存在する間データは維持される\nページセッションはタブやブラウザーが開いている限り続き、ページの再読み込みや復元にも耐えられる'
      }
      useStorage={useSessionStorage}
    />
  )
}
